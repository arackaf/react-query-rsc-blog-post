"use client";

import { FC, useRef } from "react";
import { saveBook } from "../serverActions";
import { BookEditProps } from "./types";
import { useQueryClient } from "@tanstack/react-query";

export const BookEdit: FC<BookEditProps> = (props) => {
  const { book } = props;
  const titleRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const saveBook = (id: number, newTitle: string) => {
    fetch("/api/books/update", {
      method: "POST",
      body: JSON.stringify({
        id,
        title: newTitle,
      }),
    });
  };

  return (
    <div className="flex gap-2">
      <input className="border p-1" ref={titleRef} defaultValue={book.title} />
      <button onClick={() => saveBook(book.id, titleRef.current!.value)}>Save</button>
    </div>
  );
};
