import { books } from "@/data/books";
import { NextApiRequest } from "next";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const GET = async () => {
  console.log("Fetching books ...");
  await new Promise((res) => setTimeout(res, 400));

  return Response.json({ books });
};
