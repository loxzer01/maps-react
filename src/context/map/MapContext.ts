import { Map } from "mapbox-gl";
import { createContext } from "react";

interface MapContextProps {
    isMapReady: boolean;
    map?: Map;
    distance?: number;

    // method to dispatch actions
    setMap: (map: Map) => void;
    setDistance: (distance: number) => void;
}

export const MapContext = createContext({} as MapContextProps);
