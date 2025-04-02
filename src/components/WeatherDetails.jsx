import React from 'react'

function WeatherDetails({location, current}) {
  return (
    <div>
        <h1>{location?.name}</h1>
        <h1>{location?.country}</h1>
        <h2>{current?.temp_c + '°C'}</h2>
        <img src={current?.condition?.icon} alt="" />
    </div>
  )
}

export default WeatherDetails