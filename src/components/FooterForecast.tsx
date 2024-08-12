import "../App.css"
import { Root } from '../Types/type'

type Props = {
    forecast: Root | null
}

function FooterForecast({forecast}: Props): JSX.Element {
  return (
    <div>
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
  )
}

export default FooterForecast
