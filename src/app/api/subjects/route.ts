import { subjects } from "@/data/subjects";

export const dynamic = "force-dynamic";

export const GET = async () => {
  await new Promise((res) => setTimeout(res, 300));

  return Response.json({ subjects });
};
