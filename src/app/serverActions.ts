"use server";

import { books } from "@/data/books";
import { revalidateTag } from "next/cache";

import sqlite3Module from "sqlite3";
const sqlite3 = sqlite3Module.verbose();

export const saveBook = async (id: number, newTitle: string) => {
  await update(id, newTitle);
  revalidateTag("books-query");
};

function update(id: number, title: string) {
  return new Promise((res) => {
    const db = new sqlite3.Database("db/db.txt", sqlite3Module.OPEN_READWRITE, async (error) => {
      try {
        if (error) {
          console.log({ error });
          return res(null);
        }

        db.run("UPDATE books SET title = ? WHERE id = ?", [title, id], (error) => {
          if (error) {
            console.log({ error });
          }
          return res(null);
        });
      } catch (err) {
        console.log(err);
      } finally {
        try {
          db.close();
        } catch (er) {}
        res(null);
      }
    });
  });
}
