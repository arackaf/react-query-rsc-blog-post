import { Suspense } from "react";
import { Books } from "./Books";
import { Subjects } from "./Subjects";
import { Tags } from "./Tags";
import { BookSearchForm } from "./BookSearchForm";
import { globalQueryClient } from "../queryClient";

export const dynamic = "force-dynamic";

export default function ReactQuery({ searchParams: { search = "" } }: any) {
  console.log("\n\n\nPROPS", { search });
  globalQueryClient.prefetchQuery({
    queryKey: ["books-query", search ?? ""],
    queryFn: async () => {
      console.log("PREFETCHING BOOKS");
      const booksResp = await fetch(`http://localhost:3000/api/books?search=${search}`);
      const { books } = await booksResp.json();

      return { books };
    },
  });

  return (
    <section className="p-5">
      <h1 className="text-lg leading-none font-bold">Books page with RSC and react-query</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="flex flex-col gap-2 p-5">
          <BookSearchForm />
          <div className="flex">
            <div className="flex-[2] min-w-0">
              <Books />
            </div>
            <div className="flex-1 flex flex-col gap-8">
              <Subjects />
              <Tags />
            </div>
          </div>
        </div>
      </Suspense>
    </section>
  );
}
