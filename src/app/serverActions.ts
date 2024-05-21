"use server";

import { revalidateTag } from "next/cache";

export const saveBook = async (id: number, title: string) => {
  await fetch("http://localhost:3000/api/books/update", {
    method: "POST",
    body: JSON.stringify({
      id,
      title,
    }),
  });
  revalidateTag("books-query");
};
