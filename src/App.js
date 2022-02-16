//Weather App Oshan Weerasinghe
import React, { useState } from "react";
import Forecast from "./components/forecast";

const api = {
  key: "ed5e11e43ce51150ea023ba2a24c8568",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('');

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 26) ? 'app warm' : 'app') : 'app'}
    /*style={{
      backgroundImage:
        "url(" + require("./Assets/hd2.jpg").default + ")",
    }}*/
    >
      <span className="title"></span>
      <main>

        <div className="search-box">
          <input type="text" 
            className="search-bar" 
            placeholder="Search..." 
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
          <button className="button">Forecast</button>
        </div>
        ) : ('')}
        <span className="title">WEATHER4U</span>
      </main>
      <Forecast />
    </div>
  );
}

export default App;
