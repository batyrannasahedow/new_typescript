import React, { ChangeEvent, useRef } from 'react'
import "../App.css";
import { CiSearch } from "react-icons/ci";
import { LiaLocationArrowSolid } from "react-icons/lia";
import {  Root } from '../Types/Type';

function Header (): JSX.Element {
  const inputRef = useRef();
  const [term, setTerm] = React.useState<string>("");
  const [forecast, setForecast] = React.useState<Root | null>(null)
const api_key = "719626185a0744c8ad783157242907";
const api_Endpoint = "https://api.weatherapi.com/v1/";

const getSearchOptions = async (value: string) =>{
 await fetch(`${api_Endpoint}search.json?key=${api_key}&q=${value.trim()}`)
  .then((res) => res.json())
  .then((res) => res(res))
}
const onInputChange =(e: ChangeEvent<HTMLInputElement>) =>{
      const value = e.target.value.trim()
      setTerm(value)
      if(value === "") return
      getSearchOptions(value)
}
const getForecast = async (city : string) => {
 await fetch(`${api_Endpoint}forecast.json?key=${api_key}&q=${city}&days=10`)
  .then((res) => res.json())
  .then((res) => setForecast(res))
}

  return (
    <div className="Header">
      <div className="div-header">
        <CiSearch className="search-icon" onClick={() => getForecast(inputRef.current.value)} />
        <input ref={inputRef} type="text" placeholder="Search city" className="search-input" value={term} onChange={onInputChange} />
      </div>
      <div className="div2-header" >
        <img className='img-icon' src={`${forecast?.current.condition.icon}`} /> 
        <div >
        <LiaLocationArrowSolid className="location-icons"/>
        <span className="location-icon">{forecast?.location.country}, {forecast?.location.name}</span>
        <span className="location-icon"></span>
        <p className="gradus">{forecast?.current.temp_c} ℃</p>
        <span className="sagat-gun" >{forecast?.current.is_day}, {forecast?.current.last_updated}</span>
        </div>
      </div>

      <div className="div3-header">
        <hr className="hr-icon"  />
        <h3 className="chaklama">The Next Day Forecast</h3>
        <div className="div4-header" >
        <button className="span-days1" >2 days</button>
        <button className="span-days2">5 days</button>
        <button className="span-days3">10 days</button>
        </div>
        <div className="div4-header" >
        <img className="storm-icon"src={`${forecast?.forecast.forecastday[1].hour[9].condition.icon}`} />
          <span className="span-tuesday">{forecast?.forecast.forecastday[1].hour[9].is_day}, {forecast?.forecast.forecastday[1].date}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[1].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[2].hour[9].condition.icon}`} />
          <span className="span-tuesday">{forecast?.forecast.forecastday[2].hour[9].is_day}, {forecast?.forecast.forecastday[2].date}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[2].hour[9].condition.text}</span>
        </div>
      </div>
      <div className="header-bash">
        <h1 className='h1-bash' >{forecast?.current.condition.text}</h1>
        <div className="div5-header" >
          <span className="span-sagat" >{forecast?.forecast.forecastday[0].hour[9].time}</span>
          <hr />
          <img className='h-icon'  src={`${forecast?.forecast.forecastday[0].hour[9].condition.icon}`} alt="" />
          <h3 className="h-gradus">{forecast?.forecast.forecastday[0].hour[9].temp_c}℃</h3>
        </div>
        <div className="div5-header" >
          <span className="span-sagat" >{forecast?.forecast.forecastday[0].hour[10].time}</span>
          <hr />
          <img className='h-icon' src={`${forecast?.forecast.forecastday[0].hour[10].condition.icon}`} alt="" />
          <h3 className="h-gradus">{forecast?.forecast.forecastday[0].hour[10].temp_c}℃</h3>
        </div>
        <div className="div5-header" >
          <span className="span-sagat" >{forecast?.forecast.forecastday[0].hour[11].time}</span>
          <hr />
          <img className='h-icon' src={`${forecast?.forecast.forecastday[0].hour[11].condition.icon}`} alt="" />
          <h3 className="h-gradus">{forecast?.forecast.forecastday[0].hour[11].temp_c}℃</h3>
        </div>
        <div className="div5-header" >
          <span className="span-sagat" >{forecast?.forecast.forecastday[0].hour[12].time}</span>
          <hr />
          <img className='h-icon' src={`${forecast?.forecast.forecastday[0].hour[12].condition.icon}`} alt="" />
          <h3 className="h-gradus">{forecast?.forecast.forecastday[0].hour[12].temp_c}℃</h3>
        </div>
        <div className="div5-header" >
          <span className="span-sagat" >{forecast?.forecast.forecastday[0].hour[13].time}</span>
          <hr />
          <img className='h-icon' src={`${forecast?.forecast.forecastday[0].hour[13].condition.icon}`} alt="" />
          <h3 className="h-gradus">{forecast?.forecast.forecastday[0].hour[13].temp_c}℃</h3>
        </div>
        <div className="div5-header" >
          <span className="span-sagat" >{forecast?.forecast.forecastday[0].hour[14].time}</span>
          <hr />
          <img className='h-icon' src={`${forecast?.forecast.forecastday[0].hour[14].condition.icon}`} alt="" />
          <h3 className="h-gradus"> {forecast?.forecast.forecastday[0].hour[14].temp_c}℃</h3>
        </div>
      </div>
      <footer className="footer">
        <h1>Today᾿s Highlights</h1>
        <div className="div6-header" >
          <span style={{display: "block", padding: "7px 15px", fontSize: "20px"}}>UV index - {forecast?.forecast.forecastday[0].day.uv} (low)</span>
          <span style={{display: "block", padding: "7px 15px", fontSize: "20px"}}>Wind Speed - {forecast?.current.wind_kph} Km/h</span>
          <span style={{display: "block", padding: "7px 15px", fontSize: "20px"}}>Sunrise - {forecast?.forecast.forecastday[0].astro.sunrise}</span>
          <span style={{display: "block", padding: "7px 15px", fontSize: "20px"}}>Sunset - {forecast?.forecast.forecastday[0].astro.sunset}</span>
        </div>
        <div className="div7-header" >
          <span style={{display: "block", padding: "7px 15px", fontSize: "20px"}}>Humidity - {forecast?.current.humidity} %</span>
          <span style={{display: "block", padding: "7px 15px", fontSize: "20px"}}>Visibility - 7 (Very light  mist)</span>
          <span style={{display: "block", padding: "7px 15px", fontSize: "20px"}}>Air Quality {} </span>
        </div>
      </footer>
    </div>
    
  );
}

export default Header;
