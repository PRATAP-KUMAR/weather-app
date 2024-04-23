import { useEffect, useState } from 'react';
import { ImSpinner3 } from "react-icons/im";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const APP_ID = '95b6e0a286b8b8ecd2d8e7d0a25b41cb';

function Card(props) {
    const obj = props;
    const { city, index } = obj;

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true)
        fetch(`${URL}?q=${city}&appid=${APP_ID}`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    setData(data);
                } else {
                    setErrorMsg(data.message)
                }
            })
            .then(() => setLoading(false))
            .catch((err) => setErrorMsg(err))
    }, [city])

    const removeCity = () => {
        const cities = JSON.parse(localStorage.getItem('cities'));
        let filtered = cities.filter(c => c !== city);
        console.log(filtered);
        localStorage.setItem('cities', JSON.stringify(filtered));
        window.location.reload();
    }

    if (errorMsg) return (
        <div className="min-h-[200px] flex items-center justify-center px-4 py-2 mx-auto text-red-500 text-xl border-b border-gray-900">
            ERR_INTERNET_DISCONNECTED
        </div>
    );

    return (
        <div>
            {
                loading ?
                    <div className='min-h-[200px] flex items-center justify-center px-4 py-2 text-4xl mx-auto border-b border-gray-900'>
                        <div className="animate-spin">
                            <ImSpinner3 />
                        </div>
                    </div>
                    : <div className='relative w-[500px] flex flex-col justify-start px-4 space-y-2 border border-gray-900'>
                        <div className='absolute right-2 top-2'>{index}</div>
                        <h2>City: <span className='text-xl text-cyan-900'>{data?.name}</span></h2>
                        <h2>Temp: <span>{parseFloat(data?.main?.temp - 273.15).toFixed(2)} Celcius</span></h2>
                        <h2>Weather: <span>{data?.weather[0]?.description}</span></h2>
                        <h2>Wind Speed: <span>{data?.wind?.speed} meters/sec</span></h2>
                        <h2>Country Code: <span>{data?.sys.country}</span></h2>
                        <button onClick={removeCity} className='btn-blue absolute right-2 bottom-2'>Remove</button>
                    </div>
            }
        </div >
    )
}

export default Card