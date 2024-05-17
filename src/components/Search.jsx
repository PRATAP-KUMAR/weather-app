import { useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { ImSpinner3 } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

function Search() {
    const [city, setCity] = useState(null);
    const [disable, setDisable] = useState(null);

    const { fetchData, isLoading, data, error } = useFetchData();

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        fetchData(city);
        const cities = JSON.parse(localStorage.getItem('cities'));
        let regex = new RegExp(city.trim().toLowerCase());
        const match = cities.find(v => regex.test(v));
        match ?
            setDisable(true)
            :
            setDisable(false)
        e.target.reset();
    }

    const addCity = (e) => {
        let city = e.target.id;
        const cities = JSON.parse(localStorage.getItem('cities')) || [];
        cities.unshift(city);
        localStorage.setItem("cities", JSON.stringify(cities));
        navigate('/');
    }

    return (
        <div className='min-h-[calc(100vh-4rem)] bg-toolite p-5 flex flex-col space-y-5'>
            <form className='flex items-center justify-center space-x-5'
                onSubmit={onSubmit}
            >
                <input
                    className='text-center border border-orange-500 text-orange-500 h-12 outline-none focus:border-2 font-custom placeholder:font-custom'
                    type='text'
                    placeholder='type city name'
                    onChange={(e) => setCity(e.target.value)}
                    required
                    autoFocus
                />
                <button type="submit" className="inpage-btn">search</button>
            </form>

            <div>
                {
                    error &&
                    < div className="min-h-[200px] bg-dark max-w-2xl flex flex-col space-y-2 text-center items-center justify-center px-4 py-2 mx-auto text-white text-md font-custom">
                        <p>You searched for city <span className="text-orange-500">"{city}"</span> and the</p>
                        <p className="text-red-500">{error}</p>
                        <button className="inpage-btn px-4 py-1" onClick={() => window.location.reload()}>ok</button>
                    </div>
                }
                {
                    isLoading &&
                    <div className='min-h-[150px] bg-dark flex items-center justify-center px-4 py-2 text-4xl max-w-xl mx-auto'>
                        <div className="animate-spin">
                            <ImSpinner3 />
                        </div>
                    </div>
                }
                {
                    data &&
                    <>
                        <div className="text-center font-bold font-custom text-blue-500">Search Result</div>
                        <div className='relative flex bg-dark flex-col justify-center items-center p-5 space-y-2 shadow-2xl text-toolite max-w-xl mx-auto'>
                            <h2>City: <span className='text-xl text-orange-500 font-custom'>{data.name}</span></h2>
                            <h2>Temp: <span>{parseFloat(data.main.temp - 273.15).toFixed(2)} Celcius</span></h2>
                            <h2>Weather: <span>{data?.weather[0].description}</span></h2>
                            <h2>Wind Speed: <span>{data.wind.speed} meters/sec</span></h2>
                            <h2>Country Code: <span>{data.sys.country}</span></h2>
                            <button id={city} onClick={addCity} disabled={disable} className="inpage-btn disabled:opacity-60">
                                Add City
                            </button>
                            {disable && <p className="text-white text-xs font-custom">City Already in Cities List</p>}
                        </div>
                    </>
                }
            </div >
        </div >
    )
}

export default Search