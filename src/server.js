import express from "express";

//cors: serve per utilizzare risorse web da qualunque punto del web
import cors from "cors";

// tutte le routes specifiche vanno importate
import myRouter from "./services/index.js";
import listEndpoints from "express-list-endpoints";

const server = express();

//prende i dati direttamente dal file .env
const port = process.env.PORT;

server.use(cors());
server.use(express.json());

// usa il router dal file importato con "prefisso" /cities
server.use("/cities", myRouter);

//mostra tutti gli endpoint come table (uguale ad un console log ma più ordinato)
console.table(listEndpoints(server));

server.listen(port, () => console.log("server is running on port ", port));
server.on("error", (error) =>
  console.log("server not running due to: ", error)
);
