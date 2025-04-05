import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherDetails from "./components/WeatherDetails";
import DayButton from "./components/DayButton";
import HourlyForecast from "./components/HourlyForecast";
import WeatherSearch from "./components/WeatherSearch";

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0);

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
  }, []);

  return (
    <div>
      <WeatherSearch/>
      <WeatherDetails
        location={weather?.location}
        current={weather?.forecast.forecastday[selectedDay].day}
      />
      <div className="weekButtons">
        {weather?.forecast?.forecastday.map((day, index) => {
          return (
            <DayButton
              key={day.date_epoch}
              day={day}
              index={index}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />
          );
        })}
      </div>
      <div className="hourlyForcast">
        <HourlyForecast hourlyForecast={weather?.forecast?.forecastday[selectedDay].hour}/>
      </div>
    </div>
  );
}

export default WeatherApp;
