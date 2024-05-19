import { FC } from "react";
import { BooksList } from "../components/BooksList";

export const Books: FC<{}> = async () => {
  const booksResp = await fetch("http://localhost:3000/api/books");
  const { books } = await booksResp.json();

  return (
    <div>
      <BooksList books={books} />
    </div>
  );
};
