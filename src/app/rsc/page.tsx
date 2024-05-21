import { Suspense } from "react";
import { Books } from "./Books";
import { Subjects } from "./Subjects";
import { Tags } from "./Tags";
import { BookSearchForm } from "../components/BookSearchForm";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function RSC(props: { searchParams: any }) {
  const search = props.searchParams.search || "";

  return (
    <section className="p-5">
      <h1 className="text-lg leading-none font-bold">Books page in RSC</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="flex flex-col gap-2 p-5">
          <BookSearchForm />
          <div className="flex">
            <div className="flex-[2] min-w-0">
              <Books search={search} />
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
