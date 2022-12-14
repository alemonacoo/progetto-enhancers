import express from "express";
import cors from "cors";

import myRouter from "./services/index.js";
import listEndpoints from "express-list-endpoints";

const server = express();
const port = process.env.PORT;

server.use(cors());
server.use(express.json());

server.listen(port, async () => {
  console.log("server is running correctly on port: ", port);
});

server.use("/", myRouter);

console.table(listEndpoints(server));
server.on("error", (error) => {
  console.log("server connection failed due to: ", error);
});
