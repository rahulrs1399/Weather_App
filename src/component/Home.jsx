import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCloud,
  faDroplet,
  faGaugeSimpleHigh,
} from "@fortawesome/free-solid-svg-icons";
import "./appstyle.css";
// import axios from "axios";

export default function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  // const fetchWeatherData = (param) => {
  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48dd5217fe52ff79e`
  //     )
  //     .then((response) => {
  //       setWeatherData(response.data);
        
  //     });
  //     console.log(weatherData);
  // };

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e3097180714efe2b42463521f2333e76`
      );

      const data = await response.json();
      console.log(data);
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  
  async function handleSearch() {
    fetchWeatherData(search);
  }

  useEffect(() => {
    fetchWeatherData("mumbai");
  }, []);


  // console.log(weatherData);

  return (
    <div className="app-body">
      <main>
        <form>
          <input
            name="search"
            value={search}
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>

        <section className="result">
          <figure className="name">
            <figcaption>India</figcaption>
            <img src="https://flagsapi.com/BE/shiny/64.png" alt="img" />
          </figure>
          <figure className="temprature">
            <img src="https://openweathermap.org/img/wn/10d@4x.png" alt="img" />
            <figcaption>
              <span>31</span>
              <sup>o</sup>
            </figcaption>
          </figure>
          <p className="description">Overcast clouds</p>
          <ul>
            <li>
              <span>Clouds</span>
              <span className="icons">
                <FontAwesomeIcon icon={faCloud} />
              </span>
              <span>98</span>%
            </li>
            <li>
              <span>Humidity</span>
              <span className="icons">
                <FontAwesomeIcon icon={faDroplet} />
              </span>
              <span>55</span>%
            </li>
            <li>
              <span>pressure</span>
              <span className="icons">
                <FontAwesomeIcon icon={faGaugeSimpleHigh} />
              </span>
              <span>1001</span>hpa
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};
