const axios = require("axios");

// Weather Api: https://home.openweathermap.org/

class WeatherApi {
  constructor(apiKey) {
    this.baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    this.apiKey = apiKey;
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        Accept: "application/json",
        APPID: this.apiKey
      }
    });
  }

  getData(zipCode, countryCode) {
    const url = `${
      this.baseUrl
    }?zip=${zipCode},${countryCode}&units=metric&appid=${this.apiKey}`;
    console.log(url);
    this.client
      .get(url)
      .then(data => {
        const weather = data.data;
        const weatherInfo = {
          name: weather.name,
          zip: zipCode,
          country: weather.sys.country,
          temperature: weather.main.temp,
          description: weather.weather[0].description,
          clouds: weather.clouds.all,
          humidity: weather.main.humidity,
          wind_speed: weather.wind.speed
        };
        console.log(weatherInfo);
      })
      .catch(err => console.error(err));
  }
}

module.exports = WeatherApi;
