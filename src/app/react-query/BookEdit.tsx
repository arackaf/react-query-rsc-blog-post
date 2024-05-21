"use client";

import { FC, useRef } from "react";
import { BookEditProps } from "../types";
import { useQueryClient } from "@tanstack/react-query";

export const BookEdit: FC<BookEditProps> = (props) => {
  const { book } = props;
  const titleRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const saveBook = async (id: number, newTitle: string) => {
    await fetch("/api/books/update", {
      method: "POST",
      body: JSON.stringify({
        id,
        title: newTitle,
      }),
    });

    queryClient.invalidateQueries({ queryKey: ["books-query"] });
  };

  return (
    <div className="flex gap-2">
      <input className="border rounded border-gray-600 p-1" ref={titleRef} defaultValue={book.title} />
      <button onClick={() => saveBook(book.id, titleRef.current!.value)}>Save</button>
    </div>
  );
};
