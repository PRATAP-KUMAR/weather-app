import { useEffect, useState } from 'react';
import { ImSpinner3 } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useFetchData } from '../hooks/useFetchData';
import Modal from './Modal';
import { useCitiesContext } from '../hooks/useCitiesContext';

function Card(props) {
    const obj = props;
    const { city, index } = obj;

    const { dispatch } = useCitiesContext();

    const [open, setOpen] = useState(false);

    const { fetchData, isLoading, data, error } = useFetchData();

    useEffect(() => {
        fetchData(city);
    }, [city]);

    const removeCity = () => {
        dispatch({ type: "REMOVE_CITY", payload: city });
    }

    return (
        <>
            <div className='relative'>
                {
                    error &&
                    <div className="min-h-[200px] bg-toodark flex items-center justify-center px-4 py-2 mx-auto text-red-500 text-xl border">
                        You searched for city &quot;{city}&quot; and the {error}
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
                    <div className='relative shadow-custom text-sm flex bg-dark flex-col justify-center items-start px-4 space-y-2 text-toolite min-h-[200px]'>
                        <div className='absolute right-2 top-2 text-white'>{index}</div>
                        <h2>City: <span className='text-orange-500 font-custom'>{data.name}</span></h2>
                        <h2>Temp: <span>{parseFloat(data.main.temp - 273.15).toFixed(2)} Celcius</span></h2>
                        <h2>Weather: <span>{data?.weather[0].description}</span></h2>
                        <h2>Wind Speed: <span>{data.wind.speed} meters/sec</span></h2>
                        <h2>Country Code: <span>{data.sys.country}</span></h2>
                        <button
                            className='absolute right-2 bottom-2 text-2xl hover:text-orange-500 text-white'
                            onClick={() => setOpen(true)}
                        >
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                }
                <Modal open={open} onClose={() => setOpen(false)}>
                    <div className='p-6 bg-white w-1/2 flex flex-col items-center rounded'>
                        <p className='text-dark font-bold'>Are you sure to delete the city <span className='text-base text-orange-500 font-custom'>{city}</span>?</p>
                        <button className='text-red-500 hover:text-red-800'>
                            <RiDeleteBin6Line onClick={removeCity} fontSize={32} />
                        </button>
                    </div>
                </Modal>
            </div >
        </>
    )
}

export default Card;