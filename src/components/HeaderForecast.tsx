import React from "react";
import { CiSearch } from "react-icons/ci";
import { LiaLocationArrowSolid } from "react-icons/lia";
import "../App.css";
import dayjs from "dayjs";
import { ChangeEvent } from "react";
import { Root1 } from "../types/Location";
import { Root2 } from "../types/Current";
import { Root3 } from "../types/Forecsat";

type Props = {
  forecast: Root1 & Root2 & Root3 | null;
  term: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
};

function HeaderForecast({
  forecast,
  term,
  onInputChange,
  handleKeyPress,
  inputRef,
}: Props): JSX.Element {
  return (
    <div>
      <div>
        <div className="div-header">
          <CiSearch className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search city"
            className="search-input"
            value={term}
            onChange={onInputChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="div2-header">
          <img
            className="img-icon"
            src={`${forecast?.current?.condition?.icon}`}
          />
          <div>
            <LiaLocationArrowSolid className="location-icons" />
            <span className="location-icon">
              {forecast?.location.country}, {forecast?.location.name}
            </span>
            <span className="location-icon"></span>
            <p className="gradus">{forecast?.current.temp_c} ℃</p>
            <span className="sagat-gun">
              {dayjs(forecast?.current.is_day).format("dddd")},{" "}
              {dayjs(forecast?.current.last_updated).format("HH:mm A")}{" "}
            </span>
          </div>
        </div>
        <hr className="hr-icon" />
        <h3 className="chaklama">The Next Day Forecast</h3>
      </div>
    </div>
  );
}

export default HeaderForecast;
