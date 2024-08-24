import React, { ChangeEvent } from 'react';
import { useCustomHooks } from '../hooks/useCustomHooks';
import getForecast from '../api/Forecast';

export const useInput = () => {
  const { setTerm, term, inputRef, setForecast } = useCustomHooks();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);
  };

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputRef.current) {
      inputRef.current.blur();
      try {
        const forecast = await getForecast(term);
        setForecast(forecast);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };

  return { onInputChange, handleKeyPress, setTerm, term, inputRef };
};

export default useInput;