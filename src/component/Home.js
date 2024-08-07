import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCloud, faDroplet, faGaugeSimpleHigh } from '@fortawesome/free-solid-svg-icons';
import './appstyle.css'

const Home = () => {

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null)

  async function fetchWeatherData(param){
    try {
      const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=${param}&appid={e3097180714efe2b42463521f2333e76}")

      const data = await response.json();
      console.log(data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchWeatherData();
  }, [])

  async function handleSearch() {
    fetchWeatherData(search)
  }

  return (
    <div className='app-body'>
      <main>
        <form>
          <input name='search' value={search} type='text' autoComplete='off' onChange={(e) => setSearch(e.target.value)}/>
          <button onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </button>
        </form>

        <section className='result'>
          <figure className='name'>
            <figcaption>India</figcaption>
            <img src="https://flagsapi.com/BE/shiny/64.png" alt='img'/>
          </figure>
          <figure className='temprature'>
            <img src="https://openweathermap.org/img/wn/10d@4x.png" alt='img'/>
            <figcaption>
              <span>31</span>
              <sup>o</sup>
            </figcaption>
          </figure>
          <p className='description'>Overcast clouds</p>
          <ul>
            <li>
              <span>Clouds</span>
              <span className='icons'>
              <FontAwesomeIcon icon={faCloud}/>
              </span>
              <span>98</span>%
            </li>
            <li>
              <span>Humidity</span>
              <span className='icons'>
              <FontAwesomeIcon icon={faDroplet}/>
              </span>
              <span>55</span>%
            </li>
            <li>
              <span>pressure</span>
              <span className='icons'>
              <FontAwesomeIcon icon={faGaugeSimpleHigh}/>
              </span>
              <span>1001</span>hpa
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Home