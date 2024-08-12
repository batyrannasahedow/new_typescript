import React, { ChangeEvent, useEffect, useRef } from 'react'
import "../App.css";
import {  Root } from '../Types/type';
import Forecast from './Forecast';
import TodaysForecast from './TodaysForecast';
import FooterForecast from './FooterForecast';
import HeaderForecast from './HeaderForecast';

function Header (): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [term, setTerm] = React.useState<string>("");
  const [forecast, setForecast] = React.useState<Root | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true)

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const getSearchOptions = async (value: string) =>{
 await fetch(`${apiUrl}search.json?key=${apiKey}&q=${value.trim()}`)
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
  await fetch(`${apiUrl}forecast.json?key=${apiKey}&q=${city}&days=10`)
   .then((res) => res.json())
   .then((res) => {setForecast(res)
  setLoading(false)})
 }
useEffect(()=>{
  setLoading(true)
getForecast("Ashgabat")     
},[])
 const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>{
  if (e.key === 'Enter') {
    if (inputRef.current) {
      getForecast(inputRef.current.value);
    }
  }
 }
  return (
    <div className="Header">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <HeaderForecast inputRef={inputRef} forecast={forecast} term={term} onInputChange={onInputChange} handleKeyPress={handleKeyPress} />
          <Forecast forecast={forecast} />
          <TodaysForecast forecast={forecast} />
          <FooterForecast forecast={forecast} />
        </div>
      )}
    </div>
    
  );
}

export default Header;
