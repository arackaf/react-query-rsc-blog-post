import { FC } from "react";
import { BookCover } from "./BookCover";

export const BooksList: FC<{ books: any[] }> = ({ books }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg font-bold leading-none">Books</h1>
      {books.map((book) => (
        <div className="flex gap-3">
          <div className="min-w-[55px]">
            <BookCover book={book} key={book.id} />
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <span className="leading-none text-lg text-ellipsis whitespace-nowrap overflow-hidden min-w-0">{book.title}</span>
            <span className="leading-none text-sm text-ellipsis whitespace-nowrap overflow-hidden italic">{(book.authors ?? []).join(", ")}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
