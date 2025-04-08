"use client";

import type { FormEvent } from "react"
import { signIn, getCurrentUser } from "aws-amplify/auth"
import { Button, Flex, TextField } from "@aws-amplify/ui-react"
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import { useSessionContext } from '@/context/SessionContext';

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
Amplify.configure(outputs);

interface SignInFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  password: HTMLInputElement
}

interface SignInForm extends HTMLFormElement {
  readonly elements: SignInFormElements
}

export default function LoginForm() {
  const router = useRouter()
  const {session, setSession} = useSessionContext();

  useEffect(() => {
    if (session?.user) {
      router.push("/")
    }
  }, [session]);

  async function handleSubmit(event: FormEvent<SignInForm>) {
    event.preventDefault()
    const form = event.currentTarget

    await signIn({
      username: form.elements.email.value,
      password: form.elements.password.value,
    }).then(({isSignedIn}) => {
      if (isSignedIn) {
        getCurrentUser().then((user) => {
          setSession({
            user: {
              name: user?.username ?? null,
              email: user?.signInDetails?.loginId ?? null,
              image: null,
            },
            expires: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
          });
        })
        router.push("/")
      }
    }).catch((error) => {
      console.error(error)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
        <Flex gap="12px" direction="column" alignItems="flex-end">
          <TextField
            id="email"
            name="email"
            autoComplete="email"
            autoFocus={true}
            required={true}
            width="300px"
            label="Email address"
            type="email"
            placeholder="amplify@test.com"
            isDisabled={false}
            labelHidden={true}
            descriptiveText="Please enter your email address"
          ></TextField>

          <TextField
            id="password"
            name="password"
            autoComplete="current-password"
            required={true}
            width="300px"
            label="Password"
            placeholder="Password"
            isDisabled={false}
            labelHidden={true}
            descriptiveText="Please enter your password"
            type="password"
          ></TextField>
          <Button type="submit" isDisabled={false} variation="primary">Sign me up</Button>
        </Flex>
    </form>
  )
}