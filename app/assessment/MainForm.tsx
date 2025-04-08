"use client";

import { useEffect, useState } from "react";
import Form from 'next/form';

import { Input, Flex, Button, Heading, Text, Badge, SwitchField } from '@aws-amplify/ui-react';
import { postLinkForm } from "@/actions/postAction";


const priorityMetadata: Record<string, { recommend: boolean; description: string }> = {
  "駅チカ": {
    recommend: true,
    description: "駅から近い物件を優先",
  },
  "教育": {
    recommend: false,
    description: "教育環境を優先",
  },
  "コスパ": {
    recommend: false,
    description: "コストパフォーマンスを優先",
  },
  "耐震性": {
    recommend: false,
    description: "耐震性を優先",
  },
  "買い物": {
    recommend: false,
    description: "買い物環境を優先",
  },
  "閑静": {
    recommend: false,
    description: "閑静な環境を優先",
  },
  "新築": {
    recommend: false,
    description: "新築物件を優先",
  },
  "Option1": {
    recommend: false,
    description: "Option1を優先",
  },
  "Option2": {
    recommend: false,
    description: "Option2を優先",
  },
}

function PriorityItem({ recommend, label, description, onToggle }: { recommend: boolean, label: string, description: string, onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <Flex direction="row" alignItems="flex-start" padding="0px 16px 8px 16px">
      { recommend && <Badge size="small" variation="success" position="absolute">おすすめ</Badge>}

      <Flex direction="row" justifyContent="space-between" alignItems="center" marginTop="30px">
        <Flex gap="0" direction="column">
          <Text fontSize="16px" fontWeight="700" color="rgba(13,26,38,1)" lineHeight="20px">{label}</Text>
          <Text fontSize="16px" fontWeight="400" color="rgba(48,64,80,1)" lineHeight="24px">{description}</Text>
        </Flex>

        <SwitchField
          label={label}
          name={label}
          defaultChecked={false}
          isDisabled={false}
          labelPosition="start"
          onChange={onToggle}
          isLabelHidden={true}
        ></SwitchField>
      </Flex>
  </Flex>

  )
}

function Priority() {
  const [priorities, setPriorities] = useState({
    "駅チカ": false,
    "教育": false,
    "コスパ": false,
    "耐震性": false,
    "買い物": false,
    "閑静": false,
    "新築": false,
    "Option1": false,
    "Option2": false,
  });

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
        <Flex direction="row" wrap={"wrap"} gap="16px" width="80%" alignItems="center" justifyContent="center">
          {Object.keys(priorities).map((key) => (
            <Flex key={key} direction="row" alignItems="center" gap="16px">
              <PriorityItem
                label={key}
                recommend={priorityMetadata[key].recommend}
                description={priorityMetadata[key].description}
                onToggle={(e) => {setPriorities({...priorities, [e.target.name]: e.target.checked})}}
              ></PriorityItem>
            </Flex>
          ))}
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
    if(url === "") {
      setIsButtonDisabled(true);  // ボタンを無効にする
      setHasError(false);
      return;
    }

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
    <>
      <Flex gap="27px" padding="0 10vw" direction="column" alignItems="stretch">
        <Text fontSize="32px" lineHeight="20px">Suumo / Home’s Link</Text>

        <Form action={postLinkForm}>
          <Input 
            id="estate_link"
            name="estate_link"
            value={url}
            onChange={handleInput}
            hasError={hasError}
            placeholder="https://www.sumo.jp/"
          />

          <Flex alignItems="stretch" justifyContent="flex-end" gap="16px">
            <Button type="button" size="large" onClick={handlePaste} variation="link">Paste</Button>
            <Button type="submit" size="large" isDisabled={isButtonDisabled} variation="primary">GO!!</Button>
          </Flex>
        </Form>

      </Flex>

      <Priority></Priority>

    </>
  )
}
