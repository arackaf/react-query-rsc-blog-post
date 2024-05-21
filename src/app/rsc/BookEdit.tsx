"use client";

import { FC, useRef, useTransition } from "react";
import { saveBook } from "../serverActions";
import { BookEditProps } from "../types";

export const BookEdit: FC<BookEditProps> = (props) => {
  const { book } = props;
  const titleRef = useRef<HTMLInputElement>(null);
  const [saving, startSaving] = useTransition();

  function doSave() {
    startSaving(async () => {
      await saveBook(book.id, titleRef.current!.value);
    });
  }

  return (
    <div className="flex gap-2">
      <input className="border rounded border-gray-600 p-1" ref={titleRef} defaultValue={book.title} />
      <button className="rounded border border-gray-600 p-1 bg-blue-300" disabled={saving} onClick={doSave}>
        {saving ? "Saving..." : "Save"}
      </button>
    </div>
  );
};
