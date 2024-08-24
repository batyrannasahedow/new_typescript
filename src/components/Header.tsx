import "./Header.css"
import Forecast from "./Forecast";
import TodaysForecast from "./TodaysForecast";
import FooterForecast from "./FooterForecast";
import HeaderForecast from "./HeaderForecast";
import { useInput } from "../utils/useInput";
import { useCustomHooks } from "../hooks/useCustomHooks";
import { useEffect } from "react";
import getForecast from "../api/Forecast";

function Header(): JSX.Element {
  const { inputRef, term, onInputChange, handleKeyPress} = useInput();
    const { loading, forecast, setForecast } = useCustomHooks();

    useEffect(()=>{
      const searchForecast = async (value: string)=>{
        const res = await getForecast(value)
        setForecast(res)
      }
      searchForecast(term || 'Ashgabat')
    },[term, setForecast])
  return (
    <div className="Header">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <HeaderForecast
            inputRef={inputRef}
            forecast={forecast}
            term={term}
            onInputChange={onInputChange}
            handleKeyPress={handleKeyPress}
          />
          <Forecast forecast={forecast} />
          <TodaysForecast forecast={forecast} />
          <FooterForecast forecast={forecast} />
        </div>
      )}
    </div>
  );
}

export default Header;
