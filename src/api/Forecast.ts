import { apiKey, apiUrl } from "../Constants/useApiKey"


export const getForecast = async (country: string) => {
        try {
              const response =  await fetch(`${apiUrl}forecast.json?key=${apiKey}&q=${country}&days=10`);
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              return data;
            } catch (error) {
              console.error('Error fetching data:', error);
              return null;
            }
}
 
export default getForecast