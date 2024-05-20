import { books } from "@/data/books";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const GET = async () => {
  console.log("Fetching books ...");
  await new Promise((res) => setTimeout(res, 400));
  console.log("Books fetched");

  return Response.json({ books });
};
