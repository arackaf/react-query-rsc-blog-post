import { Suspense } from "react";
import { Books } from "./Books";

export const dynamic = "force-dynamic";

export default function RSC() {
  return (
    <section>
      <h1>React-query</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Books />
      </Suspense>
    </section>
  );
}
