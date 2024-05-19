import { useContext } from "react";
import { CitiesContext } from "../context/CitiesContext";

export const useCitiesContext = () => {
    const context = useContext(CitiesContext)

    if (!context) {
        throw Error('Context must be used only inside provider')
    }

    return context;
}