import Card from "./Card";

function Cities() {
    const cities = JSON.parse(localStorage.getItem('cities')) || [];

    if (cities.length === 0) {
        return (
            <div className='min-h-[calc(100vh-4rem)] bg-toolite flex items-center justify-center'>
                <div className="text-sm font-bold text-center">
                    <p>No cities were added.</p>
                    <p>Click search button to search for city and then add.</p>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-[calc(100vh-4rem)] bg-toolite max-w-4xl mx-auto'>
            <div className="flex p-5 flex-col space-y-5">
                {cities.map((city, idx) => (
                    <Card city={city} key={city} index={cities.length - (idx)} />
                ))}
            </div>
        </div >
    )
}

export default Cities;