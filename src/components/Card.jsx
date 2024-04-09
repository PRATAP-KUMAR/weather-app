import { useEffect, useState } from 'react'

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const APP_ID = '95b6e0a286b8b8ecd2d8e7d0a25b41cb';

function Card(props) {
    const obj = props;
    const { city, index } = obj;

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${URL}?q=${city}&appid=${APP_ID}`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    setData(data);
                }
            })
    }, [city])

    {
        return data ?
            (
                <div className="relative w-full min-h-[200px] bg-sky-200 space-y-5 flex flex-col p-4 border-b border-gray-900">
                    <div className='absolute right-5 top-5'>{index}</div>
                    <h2>City: <span className='text-xl text-gray-900'>{data?.name}</span></h2>
                    <h2>Country Code: <span>{data?.sys.country}</span></h2>
                    <h2>Temp: <span>{parseFloat(data?.main?.temp - 273.15).toFixed(2)} Celcius</span></h2>
                    <h2>Weather: <span>{data?.weather[0]?.description}</span></h2>
                    <h2>Wind Speed: <span>{data?.wind?.speed}</span></h2>
                </div >
            ) : null;
    }
}

export default Card