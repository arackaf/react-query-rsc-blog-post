import { NextRequest } from "next/server";
import sqlite3Module from "sqlite3";
const sqlite3 = sqlite3Module.verbose();

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const GET = async (request: NextRequest) => {
  console.log("\n\nFetching books ...");

  const search = request.nextUrl.searchParams.get("search");

  await new Promise((res) => setTimeout(res, 400));

  const books = await new Promise((res) => {
    const db = new sqlite3.Database("db/db.txt", sqlite3Module.OPEN_READWRITE, async (error) => {
      try {
        if (error) {
          return res(null);
        }

        const query = `SELECT * FROM books ${search ? ` WHERE title LIKE ? ` : ""} ORDER BY id DESC`;
        const params = search ? [`%${search}%`] : [];

        db.all(query, params, (err, rows) => {
          if (err) {
            return res(null);
          }

          const books = rows.map((row: any) => {
            const result = { ...row };
            result.authors = JSON.parse(row.authors);
            result.smallImagePreview = JSON.parse(row.smallImagePreview);

            return result;
          });
          return res(books);
        });
      } catch (err: any) {
        return res(null);
      } finally {
        try {
          db.close();
        } catch (er) {}
      }
    });
  });

  console.log("Books fetched");
  return Response.json({ books });
};
