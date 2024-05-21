"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { FC } from "react";
import { BooksList } from "../components/BooksList";
import { BookEdit } from "./BookEdit";
import { useSearchParams } from "next/navigation";
import { makeBooksSearchQuery } from "./utils";

export const Books: FC<{}> = () => {
  const params = useSearchParams();
  const search = params.get("search") ?? "";

  const { data } = useSuspenseQuery(makeBooksSearchQuery(search));

  const { books } = data;

  return (
    <div>
      <BooksList books={books} BookEdit={BookEdit} />
    </div>
  );
};
