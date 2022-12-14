import { cities } from "../data/cities.js";
import fetch from "node-fetch";

// Funzione per mappare ogni elemento dell'array cities in un array di latitudini e longitudini
export let latLonArray = Promise.all(
  cities.map(async (city) => {
    return await getLatLon(city);
  })
);

// funzione per ottenere latitudine e longitudine di una città
async function getLatLon(city) {
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},ITA`;
  try {
    const response = await fetch(url, {
      headers: {
        "x-api-key": process.env.WEATHERAPIKEY,
      },
    });
    if (response.ok) {
      const data = await response.json();
      const lat = data[0].lat;
      const lon = data[0].lon;
      return { lat: lat, lon: lon };
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}
