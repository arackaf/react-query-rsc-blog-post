import sqlite3Module from "sqlite3";
import { books } from "@/data/books";

const sqlite3 = sqlite3Module.verbose();

const db = new sqlite3.Database("db/db.txt", sqlite3Module.OPEN_READWRITE, async (error) => {
  if (error) {
    console.error({ error });
    return;
  }

  await run("DROP TABLE IF EXISTS books");

  await run("CREATE TABLE books (id INT PRIMARY KEY, title TEXT, authors TEXT, smallImage TEXT, smallImagePreview TEXT)");

  for (const book of books) {
    await run("INSERT INTO books VALUES (?, ?, ?, ?, ?)", [
      book.id,
      book.title,
      JSON.stringify(book.authors),
      book.smallImage,
      JSON.stringify(book.smallImagePreview),
    ]);
  }
});

function run(command: string, params: unknown[] = []): Promise<void> {
  return new Promise((res, rej) => {
    db.run(command, params, (err) => {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });
}
