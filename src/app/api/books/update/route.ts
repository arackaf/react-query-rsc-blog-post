import sqlite3Module from "sqlite3";
const sqlite3 = sqlite3Module.verbose();

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const POST = async (request: Request, context: any) => {
  const body = await request.json();
  const { id, title } = body;
  await update(id, title);

  console.log("\n\nBook Updated! 🎉🎉🎉");

  return Response.json({});
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
