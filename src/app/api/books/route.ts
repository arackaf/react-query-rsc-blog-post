import { books } from "@/data/books";

export const dynamic = "force-dynamic";

export const GET = async () => {
  console.log("Fetching books");
  await new Promise((res) => setTimeout(res, 500));

  console.log()
  console.log("/api/books NO CACHE")
  console.log(new Date().toLocaleTimeString("en-US"))
  console.log()

  // return Response.json({ books: [] });
  return Response.json({ books });
};
