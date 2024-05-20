"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { FC } from "react";
import { BooksList } from "../components/BooksList";
import { BookEdit } from "../components/BookEditReactQuery";

export const Books: FC<{}> = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["books-query"],
    queryFn: async () => {
      const booksResp = await fetch("http://localhost:3000/api/books");
      const { books } = await booksResp.json();

      return { books };
    },
  });

  const { books } = data;

  return (
    <div>
      <BooksList books={books} BookEdit={BookEdit} />
    </div>
  );
};
