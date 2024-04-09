import Card from "./Card"

function Cities() {
    const cities = JSON.parse(localStorage.getItem('cities'))

    return (
        <div className='bg-sky-400 min-h-[calc(100vh-4rem)] flex flex-wrap gap-5 items-center justify-center'>
            {!cities ? (<div className="text-xl font-bold">
                No cities were added
                <br />
                Click search button to search for city and then add.
            </div>) :
                cities.map((city) => (
                    <Card city={city} key={city} />
                ))}
        </div>
    )
}

export default Cities