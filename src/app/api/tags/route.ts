import { tags } from "@/data/tags";

export const dynamic = "force-dynamic";

export const GET = async () => {
  console.log("Fetching tags ...");
  await new Promise((res) => setTimeout(res, 400));
  console.log("Tags fetched");

  return Response.json({ tags });
};
