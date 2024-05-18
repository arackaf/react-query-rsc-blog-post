import { books } from "@/data/books";

export const dynamic = "force-dynamic";

export const GET = async () => {
  console.log("Fetching books");
  await new Promise((res) => setTimeout(res, 1500));

  return Response.json({ books: [] });
};
