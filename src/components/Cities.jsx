import Card from "./Card";

function Cities() {
    const cities = JSON.parse(localStorage.getItem('cities')) || [];

    if (cities.length === 0) {
        return (
            <div className='min-h-[calc(100vh-4rem)] bg-sky-200 flex items-center justify-center'>
                <div className="text-lg md:text-2xl font-bold text-center">
                    <p>No cities were added.</p>
                    <p>Click search button to search for city and then add.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-sky-900">
            <div className='bg-sky-200 max-w-4xl mx-auto'>
                <div className="bg-sky-200 flex flex-col">
                    {cities.map((city, idx) => (
                        <Card city={city} key={city} index={cities.length - (idx)} />
                    ))}
                </div>
            </div >
        </div>
    )
}

export default Cities;