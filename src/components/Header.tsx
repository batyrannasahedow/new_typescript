import React, { ChangeEvent, useEffect, useRef } from 'react'
import "../App.css";
import { CiSearch } from "react-icons/ci";
import { LiaLocationArrowSolid } from "react-icons/lia";
import {  Root } from '../Types/Type';
import dayjs  from "dayjs"

function Header (): JSX.Element {
  const inputRef = useRef();
  const [term, setTerm] = React.useState<string>("");
  const [forecast, setForecast] = React.useState<Root | null>(null);
  const [weather, setWeather] = React.useState<boolean>(false);
  const [weather2, setWeather2] = React.useState<boolean>(false);
  const [weather3, setWeather3] = React.useState<boolean>(false);
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
useEffect(()=>{
  const getForecast = async () => {
    await fetch(`${api_Endpoint}forecast.json?key=${api_key}&q=Ashgabat&days=10`)
     .then((res) => res.json())
     .then((res) => setForecast(res))
   }
   getForecast()
},[])
 const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>{
  if (e.key === 'Enter') {
    getForecast(inputRef.current.value);
  }
 }



  return (
    <div className="Header">
      <div className="div-header">
        <CiSearch className="search-icon" onClick={() => getForecast(inputRef.current.value)} />
        <input ref={inputRef} type="text" placeholder="Search city" className="search-input" value={term} onChange={onInputChange} onKeyDown={handleKeyPress}/>
      </div>
      <div className="div2-header" >
        <img className='img-icon' src={`${forecast?.current.condition.icon}`} /> 
        <div >
        <LiaLocationArrowSolid className="location-icons"/>
        <span className="location-icon">{forecast?.location.country}, {forecast?.location.name}</span>
        <span className="location-icon"></span>
        <p className="gradus">{forecast?.current.temp_c} ℃</p>
        <span className="sagat-gun" >{dayjs(forecast?.current.is_day).format('dddd')}, {dayjs(forecast?.current.last_updated).format('HH:mm A')} </span>
        </div>
      </div>
        <hr className="hr-icon"  />
        <h3 className="chaklama">The Next Day Forecast</h3>
        <div className="div3-header">
        {
          weather?<div> <div className="div4-header" >
        <img className="storm-icon"src={`${forecast?.forecast.forecastday[1].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[1].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[1].date).format('MMM DD')}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[1].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[2].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[2].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[2].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[2].hour[9].condition.text}</span>
        </div>
          </div> :<button className="span-days1" onClick={() => setWeather(true)} >2 days</button>
        }
         {
          weather2?<div className='div9-header' > <div className="div4-header" >
        <img className="storm-icon"src={`${forecast?.forecast.forecastday[1].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[1].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[1].date).format('MMM DD')}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[1].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[2].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[2].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[2].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[2].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[3].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[3].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[3].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[3].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[4].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[4].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[4].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[4].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[5].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[5].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[5].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[5].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[6].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[6].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[6].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[6].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[7].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[7].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[7].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[7].hour[9].condition.text}</span>
        </div>
          </div> :<button className="span-days2" onClick={() => setWeather2(true)} >7 days</button>
        }
        {
          weather3?<div className='div10-header'> <div className="div4-header" >
        <img className="storm-icon"src={`${forecast?.forecast.forecastday[1].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[1].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[1].date).format('MMM DD')}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[1].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[2].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[2].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[2].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[2].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[3].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[3].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[3].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[3].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[4].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[4].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[4].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[4].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[5].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[5].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[5].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[5].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[6].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[6].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[6].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[6].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[7].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[7].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[7].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[7].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[8].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[8].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[8].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[8].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[9].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[9].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[9].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[9].hour[9].condition.text}</span>
        </div>
          </div> :<button className="span-days3" onClick={() => setWeather3(true)} >10 days</button>
        }
        
        </div>
      <div className="header-bash">
        <h1 className='h1-bash' >{forecast?.current.condition.text}</h1>
        <div className="div5-header" >
          <span className="span-sagat" >{dayjs(forecast?.forecast.forecastday[0].hour[9].time).format('HH:mm')}</span>
          <hr />
          <img className='h-icon'  src={`${forecast?.forecast.forecastday[0].hour[9].condition.icon}`}/>
          <h3 className="h-gradus">{forecast?.forecast.forecastday[0].hour[9].temp_c}℃</h3>
        </div>
        <div className="div5-header" >
          <span className="span-sagat" >{dayjs(forecast?.forecast.forecastday[0].hour[10].time).format('HH:mm')}</span>
          <hr />
          <img className='h-icon' src={`${forecast?.forecast.forecastday[0].hour[10].condition.icon}`} />
          <h3 className="h-gradus">{forecast?.forecast.forecastday[0].hour[10].temp_c}℃</h3>
        </div>
        <div className="div5-header" >
          <span className="span-sagat" >{dayjs(forecast?.forecast.forecastday[0].hour[11].time).format('HH:mm')}</span>
          <hr />
          <img className='h-icon' src={`${forecast?.forecast.forecastday[0].hour[11].condition.icon}`} />
          <h3 className="h-gradus">{forecast?.forecast.forecastday[0].hour[11].temp_c}℃</h3>
        </div>
        <div className="div5-header" >
          <span className="span-sagat" >{dayjs(forecast?.forecast.forecastday[0].hour[12].time).format('HH:mm')}</span>
          <hr />
          <img className='h-icon' src={`${forecast?.forecast.forecastday[0].hour[12].condition.icon}`} />
          <h3 className="h-gradus">{forecast?.forecast.forecastday[0].hour[12].temp_c}℃</h3>
        </div>
        <div className="div5-header" >
          <span className="span-sagat" >{dayjs(forecast?.forecast.forecastday[0].hour[13].time).format('HH:mm')}</span>
          <hr />
          <img className='h-icon' src={`${forecast?.forecast.forecastday[0].hour[13].condition.icon}`}  />
          <h3 className="h-gradus">{forecast?.forecast.forecastday[0].hour[13].temp_c}℃</h3>
        </div>
        <div className="div5-header" >
          <span className="span-sagat" >{dayjs(forecast?.forecast.forecastday[0].hour[14].time).format('HH:mm')}</span>
          <hr />
          <img className='h-icon' src={`${forecast?.forecast.forecastday[0].hour[14].condition.icon}`} />
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
