import { useState } from "react";

export const useFetchData = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [data, setData] = useState(null);

    const URL = import.meta.env.VITE_URL;
    const APP_ID = import.meta.env.VITE_APP_ID;

    const fetchData = async (city) => {
        try {
            setError(null);
            setData(null);
            setIsLoading(true);
            let trimmed = city.trim().toLowerCase();
            const response = await fetch(`${URL}?q=${trimmed}&appid=${APP_ID}`, {
                mode: "cors"
            });
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