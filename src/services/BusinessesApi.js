import { latLonArray } from "./CitiesLatLon.js";
import fetch from "node-fetch";

export const getBusinneses = async () => {
  let businesses = Promise.all(
    (await latLonArray).map(async (city) => {
      const lat = city.lat;
      const lon = city.lon;

      //URL include solo i 5 migliori risultati a quella specifica latitudine e longitudine
      let url = `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lon}&sort_by=best_match&limit=5`;
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: process.env.YELPAPIKEY,
          },
        });
        if (response.ok) {
          return await response.json();
        } else {
          console.log("Could not get Businesses" + "\n Response: " + response);
        }
      } catch (error) {
        console.log(error);
      }
    })
  );

  return businesses;
};
