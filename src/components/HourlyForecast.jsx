import React from "react";
import HourlyCard from "./HourlyCard";

function HourlyForecast({hourlyForecast}) {
  return (
    <div>
      {hourlyForecast?.map((hour, index) => {
        return <HourlyCard key={index} hour={hour} />;
      })}
    </div>
  );
}

export default HourlyForecast;
