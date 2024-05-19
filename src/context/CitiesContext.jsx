import { createContext, useReducer } from "react";
import citiesReducer from "../reducers/citiesReducer";

export const CitiesContext = createContext();

export const CitiesContextProvider = (props) => {
    const obj = props;
    const { children } = obj;

    const [state, dispatch] = useReducer(citiesReducer, {
        cities: JSON.parse(localStorage.getItem('cities')) || []
    })

    return (
        <CitiesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CitiesContext.Provider>
    )
}

