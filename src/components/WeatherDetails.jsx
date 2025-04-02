import React from 'react'
import '../style/weatherDetails.css'

function WeatherDetails({location, current}) {
  return (
    <div className="weather-container">
      <div className="location-container">
        <h1 className="location-name">{location?.name}</h1>
        <h2 className="location-country">{location?.country}</h2>
      </div>
      <div className="weather-info">
        <img src={current?.condition?.icon} alt="Weather Icon" className="weather-icon" />
        <h2 className="temperature">{current?.temp_c}°C</h2>
      </div>
      <p className="weather-condition">{current?.condition?.text}</p>
    </div>
  )
}

export default WeatherDetails