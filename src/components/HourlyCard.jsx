import React from 'react'

function HourlyCard({hour}) {
  return (
    <div>
      <p>{hour.time.slice(-5)}</p>
      <img src={hour.condition.icon} alt="" />
      <p>{hour.temp_c} <sup>o</sup>C</p>
    </div>
  )
}

export default HourlyCard