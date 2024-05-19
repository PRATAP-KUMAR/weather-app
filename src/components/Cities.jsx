import Card from "./Card";
import { useCitiesContext } from "../hooks/useCitiesContext";

function Cities() {
    const { cities } = useCitiesContext();

    return (
        <div className="bg-toolite min-h-[calc(100vh-10rem)] p-5 max-w-4xl mx-auto h">
            {
                cities?.length === 0 &&
                <div className="font-bold font-custom text-center text-toodark">
                    <p>No cities were added.</p>
                    <p>Search for a city and then add.</p>
                </div>
            }

            {
                cities &&
                <div className="flex flex-col space-y-5">
                    {cities?.map((city, idx) => (
                        <Card
                            key={city}
                            city={city}
                            index={cities.length - (idx)}
                        />
                    ))}
                </div>
            }
        </div>
    )
}

export default Cities;