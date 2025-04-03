import React from "react";
import "../style/weatherDetails.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function WeatherDetails({ location, current }) {
  if (!location || !current) {
    return (
      <DotLottieReact
        src="https://lottie.host/871a59b4-ddbd-444f-92fd-a20fba4fe914/yZSF5GyWvV.lottie"
        loop
        autoplay
      />
    );
  }
  return (
    <div className="weather-container">
      <div className="location-container">
        <h1 className="location-name">{location?.name}</h1>
        <h2 className="location-country">{location?.country}</h2>
      </div>
      <div className="weather-info">
        <img
          src={current?.condition?.icon}
          alt="Weather Icon"
          className="weather-icon"
        />
        <h2 className="temperature">{current?.avgtemp_c}°C</h2>
      </div>
      <p className="weather-condition">{current?.condition?.text}</p>
    </div>
  );
}

export default WeatherDetails;
