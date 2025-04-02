"use client";

import type { FormEvent } from "react"
import { Amplify } from "aws-amplify"
import { signIn } from "aws-amplify/auth"
import outputs from "@/amplify_outputs.json"
import { Button, Flex, TextField } from "@aws-amplify/ui-react"

Amplify.configure(outputs)

interface SignInFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  password: HTMLInputElement
}

interface SignInForm extends HTMLFormElement {
  readonly elements: SignInFormElements
}

export default function LoginForm() {
  async function handleSubmit(event: FormEvent<SignInForm>) {
    event.preventDefault()
    const form = event.currentTarget
    // ... validate inputs

    await signIn({
      username: form.elements.email.value,
      password: form.elements.password.value,
    }).then(({isSignedIn, nextStep}) => {
      console.log(isSignedIn)
      console.log(nextStep)
    }).catch((error) => {
      console.error("Error signing in:", error)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
        <Flex gap="12px" direction="column" justifyContent="flex-start" alignItems="flex-start">
          {/* <label htmlFor="email">Email:</label> */}
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

          {/* <label htmlFor="password">Password:</label> */}
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