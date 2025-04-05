import React from 'react'
import '../style/app.css'

function HourlyCard({hour}) {
  return (
    <div className='hourCard'>
      <p>{hour.time.slice(-5)}</p>
      <img src={hour.condition.icon} alt="" />
      <p>{hour.temp_c} <sup>o</sup>C</p>
    </div>
  )
}

export default HourlyCard