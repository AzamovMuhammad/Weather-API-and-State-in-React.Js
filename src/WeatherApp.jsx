import React, { useState } from 'react'
import WeatherSearch from './components/WeatherSearch'
import WeatherDetails from './components/WeatherDetails'
import HourlyForecast from './components/HourlyForecast'
import DayButton from './components/DayButton'
import HourlyCard from './components/HourlyCard'

function WeatherApp() {
  const [weather, setWeather] = useState(null)

  


  return (
    <div>
        <WeatherSearch/>
        <WeatherDetails/>
        <HourlyForecast/>
        <HourlyCard/>
        <DayButton/>
    </div>
  )
}

export default WeatherApp