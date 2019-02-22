require("dotenv").config();

const WeatherApi = require("./lib/WeatherApi");

const weather = new WeatherApi(process.env.API_KEY);

const city = process.argv[2];
const countryCode = process.argv[3];

if (!city || !countryCode) {
  console.log("Please define a city and a country code in your command.");
  process.exit();
}

console.log("Weather in:", city, "in:", countryCode);

console.log(weather.getData(city, countryCode));
