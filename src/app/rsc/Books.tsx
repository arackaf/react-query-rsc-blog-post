import { FC } from "react";

export const Books: FC<{}> = async () => {
  const booksResp = await fetch("http://localhost:3000/api/books");
  const { books } = await booksResp.json();

  return <div>{books.length}</div>;
};
