import { useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { ImSpinner3 } from "react-icons/im";
import { useCitiesContext } from "../hooks/useCitiesContext";

function Search() {
    const [city, setCity] = useState(null);
    const [disable, setDisable] = useState(null);
    const [closeForm, setCloseForm] = useState(null);

    const { fetchData, isLoading, data, error } = useFetchData();

    const { dispatch } = useCitiesContext();

    const onSubmit = (e) => {
        e.preventDefault();
        setCloseForm(null);
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
        dispatch({ type: "ADD_CITY", payload: city });
        setCloseForm(true);
    }

    return (
        <div className='bg-lite min-h-24 p-5 items-center justify-center flex flex-col mx-auto max-w-4xl'>
            <form className='flex mx-auto items-center justify-center space-x-2' onSubmit={onSubmit}>
                <input
                    className='text-center border border-orange-500 text-orange-500 h-12 outline-none focus:border-2 font-custom placeholder:font-custom'
                    type='text'
                    placeholder='type city name'
                    onChange={(e) => setCity(e.target.value)}
                    required
                    autoFocus
                />
                <button type="submit" className="inpage-btn">Search</button>
            </form>

            <div className="w-full">
                {
                    error && !closeForm &&
                    <div className="pt-5">
                        < div className="min-h-[200px] w-full bg-dark flex flex-col space-y-2 text-center items-center justify-center px-4 py-2 mx-auto text-white text-md font-custom">
                            <p>You searched for city <span className="text-orange-500">&quot;{city}&quot;</span> and the</p>
                            <p className="text-red-500">{error}</p>
                            <button className="inpage-btn px-4 py-1" onClick={() => setCloseForm(true)}>ok</button>
                        </div>
                    </div>
                }
                {
                    isLoading &&
                    <div className="pt-5">
                        < div className="min-h-[200px] w-full bg-dark flex flex-col space-y-2 text-center items-center justify-center px-4 py-2 mx-auto text-white text-md font-custom">
                            <div className="animate-spin">
                                <ImSpinner3 />
                            </div>
                        </div>
                    </div>
                }
                {
                    data && !closeForm &&
                    <>
                        <div className="text-center font-bold font-custom text-white">Search Result</div>
                        <div className='relative flex bg-dark shadow-custom flex-col justify-center items-center p-5 space-y-2 text-toolite mx-auto'>
                            <h2>City: <span className='text-xl text-orange-500 font-custom'>{data.name}</span></h2>
                            <h2>Temp: <span>{parseFloat(data.main.temp - 273.15).toFixed(2)} Celcius</span></h2>
                            <h2>Weather: <span>{data?.weather[0].description}</span></h2>
                            <h2>Wind Speed: <span>{data.wind.speed} meters/sec</span></h2>
                            <h2>Country Code: <span>{data.sys.country}</span></h2>
                            <div className="flex justify-center space-x-5">
                                <button id={city} onClick={addCity} disabled={disable} className="inpage-btn disabled:opacity-60">
                                    Add City
                                </button>
                                <button className="inpage-btn px-4 py-1" onClick={() => setCloseForm(true)}>Close</button>
                            </div>
                            {disable && <p className="text-white text-xs font-custom">City Already in Cities List</p>}
                        </div>
                    </>
                }
            </div >
        </div >
    )
}

export default Search