import { PlacesResponse } from "../../interfaces";
import { PlacesState } from "./PlacesProvider";

type PlacesAction = {
    type: 'setUserLocation',
    payload: [
        number,
        number
    ]
}
| {
    type: 'setPlaces',
    payload: PlacesResponse[] 
}
| {
    type: 'setLoadingPlaces'
}


export const PlacesReducer = (state:PlacesState, action:PlacesAction):PlacesState => {

    switch (action.type) {
        case 'setUserLocation':
            return {
                ...state,
                isLoading: false,
                userLocation: action.payload
            }
        case 'setLoadingPlaces':
            return {
                ...state,
                
                places: [],
                isLoadingPlaces: true
            }
        case 'setPlaces':
            return {
                ...state,
                isLoadingPlaces:false,
                places: action.payload
            }
        default:
            return state;
    }
};