import { FC } from "react";
import { BooksList } from "./BooksList";

type BookPageLayoutProps = {
  books: any[];
};
export const BookPageLayout: FC<BookPageLayoutProps> = (props) => {
  const { books } = props;

  return (
    <div className="flex">
      <div className="flex-1">
        <BooksList books={books} />
      </div>
      <div className="flex-[5]"></div>
    </div>
  );
};
