import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDetails from "./components/WeatherDetails";
import HourlyForecast from "./components/HourlyForecast";
import DayButton from "./components/DayButton";
import HourlyCard from "./components/HourlyCard";

function WeatherApp() {
  const [weather, setWeather] = useState(null);

  const getWeatherData = async () => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?q=Tashkent&days=3&key=ddc119676ccc46b982c101058241612`
      );
      setWeather(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherData();
  });

  return (
    <div>
      <WeatherSearch />
      <WeatherDetails />
      <HourlyForecast />
      <HourlyCard />
      <DayButton />
    </div>
  );
}

export default WeatherApp;
