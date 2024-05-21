"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, FormEventHandler, useRef, useTransition } from "react";

export const BookSearchForm: FC<{}> = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search")! || "";
  const router = useRouter();
  const [searching, startTransition] = useTransition();

  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    const searchParams = new URLSearchParams();
    if (searchRef.current?.value) {
      searchParams.set("search", searchRef.current.value);
    }
    const queryString = searchParams.toString();
    startTransition(() => {
      router.push(currentPath + (queryString ? "?" : "") + queryString);
    });
  };

  return (
    <form onSubmit={onSubmit} method="GET" className="flex gap-2 items-center">
      <input ref={searchRef} defaultValue={currentSearch} placeholder="Search" name="search" className="border border-gray-600 rounded p-2" />
      {searching ? <span>Searching ...</span> : null}
    </form>
  );
};
