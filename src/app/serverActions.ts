"use server";

import { books } from "@/data/books";
import { revalidateTag } from "next/cache";

export const saveBook = (id: number, newTitle: string) => {
  books.forEach((b) => {
    if (b.id === id) {
      b.title = newTitle;
      console.log(newTitle);
    }
    b.title = "SSS";
  });
  revalidateTag("books-query");
};
