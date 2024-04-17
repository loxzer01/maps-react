import { Map, Marker } from "mapbox-gl";


interface MapState {
    isMapReady: boolean;
    map?: Map;
    distance?: number;
    markers?: Marker[];
}

type MapAction = { type: 'setMap', payload: Map } | { type: 'setDistance', payload: number }
| { type: 'setMarkers', payload: Marker[] }


export const MapReducer = (state: MapState, action: MapAction): MapState => {
    switch (action.type) {
        case 'setMap':
            return {
                ...state,
                isMapReady: true,
                map: action.payload
            }
        case 'setDistance':
            return {
                ...state,
                distance: action.payload
            }
        case 'setMarkers':
            return {
                ...state,
                markers: action.payload
            }
        default:
            return state;
    }

}