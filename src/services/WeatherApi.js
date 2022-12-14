import { latLonArray } from "./CitiesLatLon.js";
import fetch from "node-fetch";

// funzione del meteo
export const getWeather = async () => {
  let weather = Promise.all(
    (await latLonArray).map(async (city) => {
      const lat = city.lat;
      const lon = city.lon;
      //url include solo i dati attuali del meteo in modo da semplificare il json restiuito
      let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts,daily&units=metric`;
      try {
        const response = await fetch(url, {
          headers: {
            "x-api-key": process.env.WEATHERAPIKEY,
          },
        });
        if (response.ok) {
          return await response.json();
        } else {
          console.log("Could not get weather" + "\n Response:" + response);
        }
      } catch (error) {
        console.log(error);
      }
    })
  );
  return weather;
};

export const getBusinneses = async () => {};
