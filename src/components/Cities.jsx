import Card from "./Card"

function Cities() {
    const cities = JSON.parse(localStorage.getItem('cities'))

    return (
        <div className="bg-sky-900">
            <div className='min-h-[calc(100vh-4rem)] grid max-w-3xl mx-auto'>
                {!cities ? (<div className="text-xl font-bold text-center">
                    No cities were added
                    <br />
                    Click search button to search for city and then add.
                </div>) :
                    cities.map((city, idx) => (
                        <Card city={city} key={city} index={cities.length - (idx)} />
                    ))}
            </div>
        </div>
    )
}

export default Cities