import { Suspense } from "react";
import { Books } from "./Books";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function RSC() {
  return (
    <section>
      <h1>RSC</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="flex">
          <div className="flex-[2] min-w-0">
            <Books />
          </div>
          <div className="flex-1 bg-red-500"></div>
        </div>
      </Suspense>
    </section>
  );
}
