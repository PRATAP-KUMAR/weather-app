import { useEffect, useState } from 'react'

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const APP_ID = '95b6e0a286b8b8ecd2d8e7d0a25b41cb';

function Card(props) {
    const obj = props;
    const { city } = obj;

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${URL}?q=${city}&appid=${APP_ID}`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    setData(data);
                    console.log(data);
                }
            })
    }, [city])

    {
        return data ?
            (<div>
                <div className="relative min-h-[200px] w-fit mx-auto bg-sky-200 justify-center rounded-3xl space-y-5 flex flex-col p-10">
                    <h2 className="font-bold">City: <span>{data?.name}</span></h2>
                    <h2 className="text-left">Country Code: <span>{data?.sys.country}</span></h2>
                    <h2>Temp: <span>{parseFloat(data?.main?.temp - 273.15).toFixed(2)} Celcius</span></h2>
                    <h2>Weather: <span>{data?.weather[0]?.description}</span></h2>
                    <h2>Wind Speed: <span>{data?.wind?.speed}</span></h2>
                </div>
            </div>) : null;
    }
}

export default Card