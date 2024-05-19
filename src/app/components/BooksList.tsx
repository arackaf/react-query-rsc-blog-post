import { FC } from "react";
import { BookCover } from "./BookCover";

export const BooksList: FC<{ books: any[] }> = ({ books }) => {
  return (
    <div className="flex flex-col gap-2">
      {books.map((book) => (
        <div className="flex gap-3">
          <div className="min-w-[55px]">
            <BookCover book={book} key={book.id} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="leading-none text-lg">{book.title}</span>
            <span className="leading-none text-sm italic">{(book.authors ?? []).join(", ")}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
