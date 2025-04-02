import React from 'react'

function WeatherDetails({location}) {
  return (
    <div>
        <h1>{location?.name}</h1>
        <h1>{location?.country}</h1>
    </div>
  )
}

export default WeatherDetails