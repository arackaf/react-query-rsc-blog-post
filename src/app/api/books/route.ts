import sqlite3Module from "sqlite3";
const sqlite3 = sqlite3Module.verbose();

import { books } from "@/data/books";
import { Book } from "@/app/components/types";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const GET = async () => {
  console.log("Fetching books ...");
  await new Promise((res) => setTimeout(res, 400));
  console.log("Books fetched");

  const books = await new Promise((res) => {
    const db = new sqlite3.Database("db/db.txt", sqlite3Module.OPEN_READWRITE, async (error) => {
      try {
        if (error) {
          return res(null);
        }

        db.all("SELECT * FROM books ORDER BY id DESC", (err, rows) => {
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
        try {
          db.close();
        } catch (er) {}
      }
    });
  });

  return Response.json({ books });
};
