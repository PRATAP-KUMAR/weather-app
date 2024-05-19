const citiesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY': {
            console.log(action.payload);
            let added = [action.payload, ...state.cities];
            localStorage.setItem("cities", JSON.stringify(added));
            return {
                cities: added
            }
        }
        case 'REMOVE_CITY': {
            let filtered = state.cities.filter(c => c !== action.payload);
            localStorage.setItem('cities', JSON.stringify(filtered));
            return {
                cities: filtered
            }
        }
        default:
            return state;
    }
}

export default citiesReducer;