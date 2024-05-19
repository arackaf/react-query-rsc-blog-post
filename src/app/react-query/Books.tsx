"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { FC } from "react";

export const Books: FC<{}> = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const booksResp = await fetch("http://localhost:3000/api/books");
      const { books } = await booksResp.json();

      return { books };
    },
  });

  const { books } = data;
  return <div>{books.length}</div>;
};
