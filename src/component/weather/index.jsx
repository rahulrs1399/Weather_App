import { useEffect, useState } from "react";
import Search from "../search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faDroplet,
  faGaugeSimpleHigh,
} from "@fortawesome/free-solid-svg-icons";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );

      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  async function handleSearch() {
    fetchWeatherData(search);
    setSearch("")
  }

//   if(weatherData?.cod !== 200){
//     main.classList.add()
//   }

//   function getCurrentDate() {
//     return new Date().toLocaleDateString("en-us", {
//       weekday: "long",
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     });
//   }

  useEffect(() => {
    fetchWeatherData("bangalore");
  }, []);

  if(loading){
    <div>Data Loading...</div>
  }

//   console.log(weatherData);

  return (
    <div className="app-body">
      <main >
        <div>
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          />
          </div>
        { weatherData?.cod !== 200 ? (
          <div className="error">Oops! City not found</div>
        ) : (
          <section className="result">
            <figure className="name">
              <figcaption>{weatherData?.name}</figcaption>
              <img src={`https://flagsapi.com/${weatherData?.sys?.country}/shiny/64.png`} alt="img" />
            </figure>
            <figure className="temprature">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png`}
                alt="img"
              />
              <figcaption>
                <span>{weatherData?.main?.temp}</span>
                <sup>o</sup>
              </figcaption>
            </figure>
            <p className="description">{weatherData?.weather[0]?.description}</p>
            <ul>
              <li>
                <span>Clouds</span>
                <span className="icons">
                  <FontAwesomeIcon icon={faCloud} />
                </span>
                <span>{weatherData?.clouds?.all}</span>%
              </li>
              <li>
                <span>Humidity</span>
                <span className="icons">
                  <FontAwesomeIcon icon={faDroplet} />
                </span>
                <span>{weatherData?.main?.humidity}</span>%
              </li>
              <li>
                <span>pressure</span>
                <span className="icons">
                  <FontAwesomeIcon icon={faGaugeSimpleHigh} />
                </span>
                <span>{weatherData?.main?.pressure}</span>hPa
              </li>
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}
