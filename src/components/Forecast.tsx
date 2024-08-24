import dayjs from "dayjs";
import "../App.css";
import { useCustomHooks } from "../hooks/useCustomHooks";
import { Root1 } from "../types/Location";
import { Root2 } from "../types/Current";
import { Root3 } from "../types/Forecsat";

type Props = {
  forecast: (Root1 & Root2 & Root3) | null;
};
function Forecast({ forecast }: Props): JSX.Element {
  const { twoDays, setTwoDays, sevenDays, setSevenDays, tenDays, setTenDays } =
    useCustomHooks();
     
    if (!forecast || forecast?.forecast.forecastday.length === 0) {
      return <p>No weather forecast</p>
    }
  return (
    <div>
      <div className="div3-header">
        {twoDays ? (
          <div>
            {forecast?.forecast.forecastday.slice(1, 2).map((day, index) => (
              <div key={index} className="div4-header">
                <img
                  className="storm-icon"
                  src={`${day.hour[9].condition.icon}`}
                />
                <span className="span-tuesday">
                  {dayjs(day.hour[9].is_day).format("dddd")},{" "}
                  {dayjs(day.date).format("MMM DD")}
                </span>{" "}
                <br />
                <span className="span-storm">{day.hour[9].condition.text}</span>
              </div>
            ))}
          </div>
        ) : (
          <button className="span-days1" onClick={() => setTwoDays(true)}>
            2 days
          </button>
        )}
        {sevenDays ? (
          <div className="div9-header">
            {forecast?.forecast.forecastday.slice(3, 7).map((day, index) => (
              <div key={index} className="div4-header">
                <img
                  className="storm-icon"
                  src={`${day.hour[9].condition.icon}`}
                />
                <span className="span-tuesday">
                  {dayjs(day.hour[9].is_day).format("dddd")},{" "}
                  {dayjs(day.date).format("MMM DD")}
                </span>{" "}
                <br />
                <span className="span-storm">{day.hour[9].condition.text}</span>
              </div>
            ))}
          </div>
        ) : (
          <button className="span-days2" onClick={() => setSevenDays(true)}>
            7 days
          </button>
        )}
        {tenDays ? (
          <div className="div10-header">
            {forecast?.forecast.forecastday.slice(8, 9).map((fore, index) => (
              <div key={index} className="div4-header">
                <img
                  className="storm-icon"
                  src={`${fore.hour[9].condition.icon}`}
                />
                <span className="span-tuesday">
                  {dayjs(fore.hour[9].is_day).format("dddd")},{" "}
                  {dayjs(fore.date).format("MMM DD")}
                </span>{" "}
                <br />
                <span className="span-storm">
                  {fore.hour[9].condition.text}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <button className="span-days3" onClick={() => setTenDays(true)}>
            10 days
          </button>
        )}
      </div>
    </div>
  );
}

export default Forecast;
