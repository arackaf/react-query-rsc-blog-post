import { FC } from "react";
import { BooksList } from "../components/BooksList";
import { BookEdit } from "../components/BookEditRSC";

export const Books: FC<{ search: string }> = async ({ search }) => {
  const booksResp = await fetch(`http://localhost:3000/api/books?search=${search}`, {
    next: {
      tags: ["books-query"],
    },
  });
  const { books } = await booksResp.json();

  return (
    <div>
      <BooksList books={books} BookEdit={BookEdit} />
    </div>
  );
};
