"use client";

import { FC, useRef, useTransition } from "react";
import { BookEditProps } from "../types";
import { useQueryClient } from "@tanstack/react-query";

export const BookEdit: FC<BookEditProps> = (props) => {
  const { book } = props;
  const titleRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const [saving, startSaving] = useTransition();

  const saveBook = async (id: number, newTitle: string) => {
    startSaving(async () => {
      await fetch("/api/books/update", {
        method: "POST",
        body: JSON.stringify({
          id,
          title: newTitle,
        }),
      });

      await queryClient.invalidateQueries({ queryKey: ["books-query"] });
    });
  };

  return (
    <div className="flex gap-2">
      <input className="border rounded border-gray-600 p-1" ref={titleRef} defaultValue={book.title} />
      <button className="rounded border border-gray-600 p-1 bg-blue-300" disabled={saving} onClick={() => saveBook(book.id, titleRef.current!.value)}>
        {saving ? "Saving..." : "Save"}
      </button>
    </div>
  );
};
