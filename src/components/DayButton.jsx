import React from "react";
import "../style/dayButton.css";

function DayButton({ day, setSelectedDay, index, selectedDay }) {
  const weekDay = new Date(day.date).toLocaleDateString("eng-US", {
    weekday: "short",
  });
  return (
    <div>
      <button className={index === selectedDay ? "active" : ""} onClick={() => setSelectedDay(index)}>{weekDay}</button>
    </div>
  );
}

export default DayButton;
