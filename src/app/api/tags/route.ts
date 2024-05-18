import { tags } from "@/data/tags";

export const dynamic = "force-dynamic";

export const GET = async () => {
  await new Promise((res) => setTimeout(res, 400));

  return Response.json({ tags });
};
