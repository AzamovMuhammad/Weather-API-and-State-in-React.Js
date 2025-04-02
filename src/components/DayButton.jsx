import React from "react";
import "../style/dayButton.css";

function DayButton({ day }) {
  const weekDay = new Date(day.date).toLocaleDateString("eng-US", {
    weekday: "short",
  });
  return (
    <div>
      <button>{weekDay}</button>
    </div>
  );
}

export default DayButton;
