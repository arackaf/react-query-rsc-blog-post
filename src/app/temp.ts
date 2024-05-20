"use server";

const saveBook = (id: string, newTitle: string) => {
  fetch("localhost:3000/api/save-book", {
    method: "POST",
    body: JSON.stringify({ id, title: newTitle }),
  });
};
