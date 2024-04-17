import { Map, Marker, Popup } from "mapbox-gl";
import { MapContext } from "./MapContext";
import { useContext, useEffect, useReducer } from "react";
import { MapReducer } from "./MapReducer";
import { PlacesContext } from "..";

export interface MapProviderProps {
  children: React.ReactNode;
}
export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers?: Marker[];
  distance?: number;
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
  distance: undefined,
  markers: [],
};

export const MapProvider = ({ children }: MapProviderProps) => {
  const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE);
  const { userLocation, places } = useContext(PlacesContext);
  useEffect(() => {
    state.markers?.forEach((element) => element.remove());
    const newMarkers: Marker[] = [];

    for (const place of places) {
      const [lng, lat] = [Number(place.lon), Number(place.lat)];
      const popup = new Popup().setHTML(`<img src='${place.icon}'/>
      <p>${place.display_name}</p>
      `);
      const marker = new Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(state.map as Map);
      newMarkers.push(marker);

      //todo eliminar polyline
      dispatch({ type: "setMarkers", payload: newMarkers });
    }
  }, [places]);
  const setMap = (map: Map) => {
    const myLocationPopup = new Popup().setHTML("<h1>You are here</h1>");

    new Marker({
      color: "#61A",
    })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map);

    dispatch({ type: "setMap", payload: map });
  };
  const setDistance = (distance: number) => {
    dispatch({ type: "setDistance", payload: distance });
  };

  return (
    <MapContext.Provider
      value={{
        ...state,
        setMap,
        setDistance,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
