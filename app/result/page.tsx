"use client";

import { View } from "@aws-amplify/ui-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Summary from "./Summary"
import Detail from "./Detail"
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
Amplify.configure(outputs);

const client = generateClient<Schema>();
type Todo = Schema['Todo']['type'];

function MainComponent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [data, setData] = useState<Todo>();

  useEffect(() => {
    (async() => {
      if (id) {
        const {data, errors} = await client.models.Todo.get({id: id})
        if(errors){
          console.log(errors)
          return
        }
        console.log(data)
        setData(data as Todo);
      }  
    })()
  }, [id]);

  return (
    <View>
      <Summary></Summary>
      <Detail></Detail>
    </View>
  )
}

export default function Resultlpage() {
  return (
    <View overflow="hidden" backgroundColor="rgba(255,255,255,1)" padding="25px 30px">

    <Suspense>
      <MainComponent />
    </Suspense>

  </View>
);
}
