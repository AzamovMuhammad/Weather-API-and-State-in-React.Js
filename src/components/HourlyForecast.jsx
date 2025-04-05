import React from "react";
import HourlyCard from "./HourlyCard";

function HourlyForecast({hourlyForecast}) {
  return (
    <div className="hourForcast">
      {hourlyForecast?.map((hour, index) => {
        return <HourlyCard key={index} hour={hour} />;
      })}
    </div>
  );
}

export default HourlyForecast;
