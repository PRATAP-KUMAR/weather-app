import { useEffect } from 'react';
import { ImSpinner3 } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useFetchData } from '../hooks/useFetchData';

function Card(props) {
    const obj = props;
    const { city, index } = obj;

    const { fetchData, isLoading, data, error } = useFetchData();

    useEffect(() => {
        fetchData(city);
    }, []);

    const removeCity = () => {
        const cities = JSON.parse(localStorage.getItem('cities'));
        let filtered = cities.filter(c => c !== city);
        console.log(filtered);
        localStorage.setItem('cities', JSON.stringify(filtered));
        window.location.reload();
    }

    return (
        <div>
            {
                error &&
                <div className="min-h-[200px] bg-toodark flex items-center justify-center px-4 py-2 mx-auto text-red-500 text-xl border">
                    You searched for city "{city}" and the {error}
                </div>
            }
            {
                isLoading &&
                <div className='min-h-[150px] bg-dark flex items-center justify-center px-4 py-2 text-4xl mx-auto'>
                    <div className="animate-spin">
                        <ImSpinner3 />
                    </div>
                </div>
            }
            {
                data &&
                <div className='relative flex bg-dark flex-col justify-start px-4 space-y-2 shadow-2xl text-toolite'>
                    <div className='absolute right-2 top-2 text-white'>{index}</div>
                    <h2>City: <span className='text-xl text-orange-500 font-custom'>{data.name}</span></h2>
                    <h2>Temp: <span>{parseFloat(data.main.temp - 273.15).toFixed(2)} Celcius</span></h2>
                    <h2>Weather: <span>{data?.weather[0].description}</span></h2>
                    <h2>Wind Speed: <span>{data.wind.speed} meters/sec</span></h2>
                    <h2>Country Code: <span>{data.sys.country}</span></h2>
                    <button onClick={removeCity} className='absolute right-2 bottom-2 text-2xl hover:text-orange-500 text-white'><RiDeleteBin6Line /></button>
                </div>
            }
        </div >
    )
}

export default Card