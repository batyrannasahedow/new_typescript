import React from 'react';
import dayjs from "dayjs";
import "../App.css"
import { Root } from '../Types/type';

type Props = {
  forecast: Root | null;
}

function Forecast({ forecast }: Props): JSX.Element {
  const [weather, setWeather] = React.useState<boolean>(false);
  const [weather2, setWeather2] = React.useState<boolean>(false);
  const [weather3, setWeather3] = React.useState<boolean>(false);
  return (
    <div>
       <div className="div3-header">
        {
          weather?<div> <div className="div4-header" >
        <img className="storm-icon" src={`${forecast?.forecast.forecastday[1].hour[9].condition.icon}`} />
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
          weather2? <div className='div9-header' > 
        <div className="div4-header">
          <img className="storm-icon" src={`${forecast?.forecast.forecastday[3].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[3].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[3].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[3].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon"src={`${forecast?.forecast.forecastday[4].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[4].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[4].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[4].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon" src={`${forecast?.forecast.forecastday[5].hour[9].condition.icon}`} />
          <span className="span-tuesday">{dayjs(forecast?.forecast.forecastday[5].hour[9].is_day).format('dddd')}, {dayjs(forecast?.forecast.forecastday[5].date).format("MMM DD")}</span> <br />
          <span className="span-storm">{forecast?.forecast.forecastday[5].hour[9].condition.text}</span>
        </div>
        <div className="div4-header">
          <img className="storm-icon" src={`${forecast?.forecast.forecastday[6].hour[9].condition.icon}`} />
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
          weather3?<div className='div10-header'> 
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

    </div>
  )
}

export default Forecast
