import express from "express";
import { getBusinesses, getWeather } from "./utilities.js";

const myRouter = express.Router();

myRouter.get("/", async (req, res, next) => {
  try {
    //chiamare funzioni delle utilities
    console.log("tutto funziona correttamente");
    const weather = await getWeather();
    const businesses = await getBusinesses();
    res.send({ weather: weather, businesses: businesses });
  } catch (error) {
    res.send({ message: error.message });
  }
});

// SHOW di un id
// myRouter.get("/:id", async (req, res, next) => {
//   try {
//     //chiamare funzioni delle utilities
//     const id = req.params.id;
//     res.send("tutto funziona correttamente");
//   } catch (error) {
//     console.log(error);
//   }
// });

export default myRouter;
