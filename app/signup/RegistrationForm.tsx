"use client";

import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
import type { FormEvent } from "react"
import { Amplify } from "aws-amplify"
import { signUp } from "aws-amplify/auth"
import outputs from "@/amplify_outputs.json"

Amplify.configure(outputs)

interface SignUpFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  password: HTMLInputElement
}

interface SignUpForm extends HTMLFormElement {
  readonly elements: SignUpFormElements
}

export default function RegistrationForm() {
  async function handleSubmit(event: FormEvent<SignUpForm>) {
    event.preventDefault()
    const form = event.currentTarget
    // ... validate inputs
    await signUp({
      username: form.elements.email.value,
      password: form.elements.password.value,
    })
  }

  return (
    <Flex
      gap="10px"
      direction="column"
      width="1440px"
      justifyContent="center"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="160px 160px 160px 160px"
      backgroundColor="rgba(255,255,255,1)"
    >
      <Flex gap="24px" direction="column" justifyContent="center" alignItems="flex-start">
        <Flex gap="12px" direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(191,64,191,1)"
            lineHeight="24px"
            width="1120px"
          >Sign up</Text>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            width="1120px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
          >Stay in touch and never miss an update</Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            width="1120px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
          >Keep up to date on the latest and greatest in the frontend and fullstack community</Text>
        </Flex>

        <form onSubmit={handleSubmit}>
        <Flex
          gap="12px"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
            {/* <input type="text" id="email" name="email" /> */}
            {/* <input type="password" id="password" name="password" /> */}
            {/* <input type="submit" /> */}

            <label htmlFor="email">Email:</label>
            <TextField
              width="300px"
              label="Email address"
              placeholder="amplify@test.com"
              isDisabled={false}
              labelHidden={true}
            ></TextField>

            <label htmlFor="password">Password:</label>
            <TextField
              width="300px"
              label="Password"
              placeholder="Password"
              isDisabled={false}
              labelHidden={true}
            ></TextField>

            <Button isDisabled={false} variation="primary">Sign me up</Button>
        </Flex>
        </form>
      </Flex>
    </Flex>
  );
}
