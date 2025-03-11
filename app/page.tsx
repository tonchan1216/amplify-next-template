"use client";

import { useState } from "react";
import Form from 'next/form';

import { Input, Label, Flex, Button, Heading, useAuthenticator, Link } from '@aws-amplify/ui-react';
import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";

import { postLinkForm } from "@/actions/postAction";

export default function App() {
  const [url, setUrl] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const inputValue = event.target.value;
    setUrl(inputValue);

    //check if the input is a valid URL
    const isValidUrl = url.match(/http(s)?:\/\/(www\.)?(suumo\.jp|homes\.co\.jp)\/[\w\-\/?=&%\.]*/);
    if (isValidUrl){
      setIsButtonDisabled(false);  // ボタンを有効にする
    } else {
      setIsButtonDisabled(true);  // ボタンを無効にする
    }
  };

  return (
    <main>
      <h1>Suumo/Home's</h1>
      <Flex direction="column" gap="small">
        <div>
          <Heading level={2}>物件アセスメント</Heading>
          <p>評価したい物件のURLを入力してください</p>
        </div>

        <Form action={postLinkForm}>
          <Label htmlFor="link">URL:</Label>
          <Input id="estate_link" name="estate_link" required onChange={handleInput} />
          <Button type="submit" isDisabled={isButtonDisabled}>Go!!</Button>
        </Form>

        <Link href="/login">login</Link>
      </Flex>
  </main>

  );
}
