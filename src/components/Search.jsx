import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImSpinner3 } from "react-icons/im";
import classNames from "./classNames";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const APP_ID = '95b6e0a286b8b8ecd2d8e7d0a25b41cb';

function Search() {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [data, setData] = useState(null);
    const [disable, setDisable] = useState(null);

    const navigate = useNavigate();

    const addCity = (e) => {
        let city = e.target.id;
        console.log(city);
        const cities = JSON.parse(localStorage.getItem("cities")) || [];
        cities.unshift(city.toLowerCase());
        localStorage.setItem("cities", JSON.stringify(cities));
        navigate('/');
    }

    const getSearchValue = (e) => {
        e.preventDefault();
        setErrorMsg('');
        setData(null);
        setLoading(true);
        const elements = new FormData(e.currentTarget);
        const city = elements.get('city')
        e.currentTarget.reset();

        fetch(`${URL}?q=${city}&appid=${APP_ID}`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    setData(data);
                } else if (!city) {
                    setErrorMsg('Empty Query');
                } else {
                    setErrorMsg(data.message)
                }
            })
            .then(() => setLoading(false))
            .catch(err => setErrorMsg(err.message))

        localStorage.getItem("cities")?.includes(city.toLowerCase())
            ?
            setDisable(true)
            :
            setDisable(false);
    }

    return (
        <div>
            <form className='flex items-center justify-center my-5 space-x-5'
                onSubmit={getSearchValue}
            >
                <input className='text-center border border-sky-400 h-12 outline-none focus:border-2'
                    type='text'
                    name="city"
                    placeholder='type city name'
                />
                <input type="submit" className="btn-blue" value='Search' />
            </form>

            {loading ? (<div className="animate-spin flex justify-center px-4 py-2 mx-auto text-sky-900 text-4xl"><ImSpinner3 /></div>) : null}
            {errorMsg ? (<div className="text-center text-red-500">{errorMsg}</div>) : null}

            {
                data ? (
                    <div>
                        <h2 className="text-center font-bold text-orange-500">Search Result</h2>
                        <div className="relative min-h-[200px] w-fit mx-auto bg-sky-200 justify-center rounded-3xl space-y-5 flex flex-col p-10">
                            <h2 className="font-bold">City: <span>{data?.name}</span></h2>
                            <h2 className="text-left">Country Code: <span>{data?.sys.country}</span></h2>
                            <h2>Temp: <span>{parseFloat(data?.main?.temp - 273.15).toFixed(2)} Celcius</span></h2>
                            <h2>Weather: <span>{data?.weather[0]?.description}</span></h2>
                            <h2>Wind Speed: <span>{data?.wind?.speed}</span></h2>
                        </div>
                        <div>
                            <button id={data?.name} disabled={disable} onClick={addCity}
                                className={classNames(disable ? "cursor-not-allowed bg-blue-300 hover:bg-blue-200" : null, "btn-blue w-fit mx-auto mt-5 flex items-center justify-center")}>
                                Add City
                            </button>
                        </div>
                        {disable ? <div className="text-center">City already added</div> : null}
                    </div >
                )
                    : null
            }
        </div>
    )
}

export default Search