export const getWeather = async () => {
  return "questo è il meteo";
};

export const getBusinesses = async () => {
  let array = [];
  for (let i = 0; i <= 100; i++) {
    array.push(`ciao ${i}`);
  }
  return await array;
};
