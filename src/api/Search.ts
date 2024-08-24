import { apiKey, apiUrl } from "../Constants/useApiKey";


 export const getSearch = async (value: string) => {
    try {
    const response = await fetch(`${apiUrl}search.json?key=${apiKey}&q=${value.trim()}`)
    return response.json()
    } catch (error) {
        console.error('Error fetching search result:', error)
        return null;
    }};
    export default getSearch;
