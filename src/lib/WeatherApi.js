const axios = require("axios");

// Weather Api: https://home.openweathermap.org/

class WeatherApi {
  constructor(apiKey) {
    this.baseUrl = "http://api.openweathermap.org/data/2.5/find";
    this.apiKey = apiKey;
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        Accept: "application/json",
        APPID: this.apiKey
      }
    });
  }

  getData(city, countryCode) {
    const url = `${this.baseUrl}?q=${city},${countryCode}&units=metric&appid=${
      this.apiKey
    }`;
    console.log(url);
    this.client
      .get(url)
      .then(data => {
        const weather = data.data.list[0];
        const weatherInfo = {
          name: weather.name,
          country: weather.sys.country,
          temperature: weather.main.temp,
          humidity: weather.main.humidity,
          weather: weather.weather[0].description,
          wind: weather.wind.speed,
          clouds: weather.clouds.all,
          rain: weather.rain,
          snow: weather.snow
        };
        console.log(weatherInfo);
      })
      .catch(err => console.error(err));
  }
}

module.exports = WeatherApi;
