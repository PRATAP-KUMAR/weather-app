import { useState } from "react";

export const useFetchData = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [data, setData] = useState(null);

    const URL = 'https://api.openweathermap.org/data/2.5/weather';
    const APP_ID = import.meta.env.VITE_APP_ID;

    const fetchData = async (city) => {
        try {
            setError(null);
            setData(null);
            setIsLoading(true);
            const response = await fetch(`${URL}?q=${city}&appid=${APP_ID}`);
            const json = await response.json();
            if (json.cod === 200) {
                setData(json);
                setIsLoading(false);
            } else {
                setError(json.message);
                setIsLoading(false);
                throw new Error('Fetching Failed')
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    return { fetchData, isLoading, data, error }
}