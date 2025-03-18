"use server";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

import { redirect } from "next/navigation";
Amplify.configure(outputs);

const client = generateClient<Schema>();

export async function postLinkForm(formData: FormData) {
  const link = formData.get("estate_link") as string;
  console.log(link)
  // const { data: todos } = await client.models.Todo.list()
  // console.log(todos);

  const { data: createResult, errors: createErrors } = await client.models.Todo.create({
    url: link,
  });

  if (!createErrors) {
    console.log(createResult)
    redirect("/result?id=" + createResult?.id);
  }
}