import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "teste do back, rodando e conectado" });
});

app.listen(3337, () => {
  console.log("Server rodando na porta 3337!");
});
