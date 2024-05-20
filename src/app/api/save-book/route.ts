import { NextApiRequest } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const POST = async (request: NextApiRequest) => {
  console.log(request.body);

  return Response.json({});
};
