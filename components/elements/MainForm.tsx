
import { useEffect, useState } from "react";
import Form from 'next/form';

import { Input, Label, Flex, Button, Heading, Link, View, Text, Badge, SwitchField, Icon } from '@aws-amplify/ui-react';
import { postLinkForm } from "@/actions/postAction";

function PriorityItem(props: any) {
  return (
    <Flex
      gap="16px"
      direction="row"
      // justifyContent="flex-start"
      alignItems="flex-start"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
    >
      { props.recommend && <Badge size="small" variation="success">おすすめ</Badge>}

      <Flex
        gap="0"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
      >
        <Flex gap="0" direction="column">
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            children="T-Shirt"
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            letterSpacing="0.01px"
            children="Classic Long Sleeve"
          ></Text>
        </Flex>
        <SwitchField
          label="On"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="start"
        ></SwitchField>
      </Flex>
  </Flex>

  )
}

function Priority() {
  return (
    <Flex direction="column">
      <Heading level={2}>Priority</Heading>

      <Text color="rgba(0,0,0,0.75)">優先したい項目を選択してください</Text>

      <Flex
        gap="62px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignSelf="stretch"
      >
        <Flex direction="column">
          <PriorityItem recommend={true}></PriorityItem>
          <PriorityItem></PriorityItem>
          <PriorityItem></PriorityItem>
          <PriorityItem></PriorityItem>
        </Flex>

        <Flex direction="column">
          <PriorityItem></PriorityItem>
          <PriorityItem></PriorityItem>
          <PriorityItem></PriorityItem>
          <PriorityItem></PriorityItem>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default function MainForm() {
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
    <View>
      <Flex
        gap="27px"
        padding="0 20vw"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Text
          fontFamily="Roboto"
          fontSize="32px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          children="Suumo / Home’s Link"
        ></Text>

        {/* <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          alignSelf="stretch"
          children="URL Link Here"
        ></Text> */}
        <Form action={postLinkForm}>
          <Input 
            id="estate_link"
            name="estate_link"
            value={url}
            required
            onChange={handleInput}
            hasError={hasError}
            placeholder="https://www.sumo.jp/"
          />

          <Flex>
            <Button type="button" size="large" onClick={handlePaste} variation="link">Paste</Button>
            <Button type="submit" size="large" isDisabled={isButtonDisabled} variation="primary">GO!!</Button>
          </Flex>
        </Form>

      </Flex>

      <Priority></Priority>

    </View>
  )
}
