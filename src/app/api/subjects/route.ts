import { subjects } from "@/data/subjects";

export const dynamic = "force-dynamic";

export const GET = async () => {
  console.log("Fetching subjects ...");
  await new Promise((res) => setTimeout(res, 300));
  console.log("Subjects fetched");

  return Response.json({ subjects });
};
