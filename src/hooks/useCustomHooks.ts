import React, { useRef } from "react";
import { Root1 } from "../types/Location";
import { Root2 } from "../types/Current";
import { Root3 } from "../types/Forecsat";


export const useCustomHooks = () =>{
    const inputRef = useRef<HTMLInputElement>(null);
    const [term, setTerm] = React.useState<string>("");
    const [forecast, setForecast] = React.useState<Root1 & Root2 & Root3 | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [twoDays, setTwoDays] = React.useState<boolean>(false);
    const [sevenDays, setSevenDays] = React.useState<boolean>(false);
    const [tenDays, setTenDays] = React.useState<boolean>(false);
    
    return {inputRef, term, setTerm, forecast,
         setForecast, loading, setLoading, 
         twoDays, setTwoDays, sevenDays, setSevenDays, 
          tenDays, setTenDays}
}