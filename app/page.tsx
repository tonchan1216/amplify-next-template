"use client";

import { useEffect, useState } from "react";
import Form from 'next/form';

import { Input, Label, Flex, Button, Heading, Link } from '@aws-amplify/ui-react';
import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";

import { postLinkForm } from "@/actions/postAction";

export default function App() {
  const [url, setUrl] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setUrl(inputValue);
  }

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setUrl(clipboardText);
    } catch (error) {
      console.error("クリップボードから読み取れませんでした:", error);
    }
  };

  useEffect(() => {
    //check if the input is a valid URL
    const isValidUrl = url.match(/http(s)?:\/\/(www\.)?(suumo\.jp|homes\.co\.jp)\/[\w\-\/?=&%\.]*/);
    if (isValidUrl){
      setIsButtonDisabled(false);  // ボタンを有効にする
      setHasError(false);
    } else {
      setIsButtonDisabled(true);  // ボタンを無効にする
      setHasError(true);
    }
  }, [url])


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
          <Input 
            id="estate_link"
            name="estate_link"
            value={url}
            required
            onChange={handleInput}
            hasError={hasError}
            placeholder="https://"
          />
          <Button type="button" onClick={handlePaste}>Paste</Button>
          <Button type="submit" isDisabled={isButtonDisabled}>Go!!</Button>
        </Form>

        <Link href="/login">login</Link>
      </Flex>
  </main>

  );
}
