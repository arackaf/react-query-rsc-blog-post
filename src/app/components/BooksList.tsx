import { FC } from "react";
import { BookCover } from "./BookCover";
import { BookEditProps } from "./types";

type Props = { books: any[]; BookEdit: FC<BookEditProps> };

export const BooksList: FC<Props> = ({ books, BookEdit }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg font-bold leading-none">Books</h1>
      {books.length === 0 ? (
        <span>No results</span>
      ) : (
        books.map((book) => (
          <div key={book.id} className="flex gap-3">
            <div className="min-w-[55px]">
              <BookCover book={book} key={book.id} />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="leading-none text-lg text-ellipsis whitespace-nowrap overflow-hidden min-w-0">{book.title}</span>
              <span className="leading-none text-sm text-ellipsis whitespace-nowrap overflow-hidden italic">{(book.authors ?? []).join(", ")}</span>
              <BookEdit book={book} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};
