import React, { useState } from "react";

function WeatherSearch() {
  const [country, setCountry] = useState("Uzbekistan")
  



  return (
    <div className="WeatherSearch">
      <div>
        <input className="searchInp" placeholder="Country..." type="text" />
        <button  className="searchBtn">Search</button>
      </div>
    </div>
  );
}

export default WeatherSearch;
