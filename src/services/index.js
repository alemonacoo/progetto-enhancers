import express from "express";
import cities from "../data/cities.json" assert { type: "json" };
import { getWeather } from "./WeatherApi.js";
import { getBusinneses } from "./BusinessesApi.js";

const myRouter = express.Router();

myRouter.get("/", async (req, res, next) => {
  try {
    const businesses = await getBusinneses();
    const weather = await getWeather();

    const compositeArray = [];
    cities.forEach((city, index) => {
      compositeArray.push({
        city: city,
        weather: weather[index],
        businesses: businesses[index].businesses,
      });
    });

    res.status(200).send(compositeArray);
  } catch (error) {
    res.send({ message: error.message });
  }
});

export default myRouter;
