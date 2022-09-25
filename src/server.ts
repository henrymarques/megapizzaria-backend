import express from "express";
import "dotenv/config";
import "express-async-errors";

import errorHandlerMiddleware from "middlewares/errorHandlerMiddleware";

import routes from "./routes";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use(routes);
app.use(errorHandlerMiddleware);

/*
app.get("/", (req, res) => {
  return res.send("<h1>It works!</h1>");
});
*/

app.use((request, response) => {
  response.status(404);

  if (request.accepts("html")) {
    return response.send(`<h1>Não encontrado ${request.url}</h1>`);
  }

  if (request.accepts("json")) {
    return response.json({ error: "Não encontrado" });
  }

  return response.type("txt").send(`Não encontrado ${request.url}`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
