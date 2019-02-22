require("dotenv").config();

const WeatherApi = require("./lib/WeatherApi");

const weather = new WeatherApi(process.env.API_KEY);

const zipCode = process.argv[2];
const countryCode = process.argv[3];

if (!/\d{4,6}/g.test(zipCode)) {
  console.log("Please provide a zip code.");
  process.exit();
}

if (!zipCode || !countryCode) {
  console.log("Please define a zip code and a country code in your command.");
  process.exit();
}

console.log("Weather in:", zipCode, "in:", countryCode);

console.log(weather.getData(zipCode, countryCode));
