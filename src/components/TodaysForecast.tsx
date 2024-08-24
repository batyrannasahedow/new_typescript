import "../App.css";
import dayjs from "dayjs";
import { Root1 } from "../types/Location";
import { Root2 } from "../types/Current";
import { Root3 } from "../types/Forecsat";

type Props = {
  forecast: Root1 & Root2 & Root3 | null;
};
function TodaysForecast({ forecast }: Props): JSX.Element {
  if (!forecast || forecast?.forecast.forecastday.length === 0) {
    return <p>No weather forecast days</p>
  }

  return (
    <div>
      <div className="header-bash">
        <h1 className="h1-bash">{forecast?.current.condition.text}</h1>
        {forecast?.forecast.forecastday[0].hour.slice(9, 15).map((hour: any, index: number) => (
          <div key={index} className="div5-header">
            <span className="span-sagat">
              {dayjs().add(index + 1, "hour").format("HH:00")}
            </span>
            <hr />
            <img className="h-icon" src={`${hour.condition.icon}`} />
            <h3 className="h-gradus">
              {hour.temp_c}℃ </h3>
          </div>
 ))}
      </div>
    </div>
  );
}

export default TodaysForecast;
