import { useEffect, useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { PlacesReducer } from "./PlacesReducer";
import { getUserLocation } from "../../helpers";
import { searchApi } from "../../apis";
import { converterStringToQuery } from "../../utils";
import { PlacesResponse } from "../../interfaces";
import axios from "axios";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: PlacesResponse[];
}

export const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
};

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: IProps) => {
  const [state, payload] = useReducer(PlacesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((location) => {
      payload({ type: "setUserLocation", payload: [location[1], location[0]] });
      console.log(location as [number, number]);
    });
  }, []);

  const searchPlacesByTerm = async (
    query: string
  ): Promise<PlacesResponse[]> => {
    if (query.length < 3) {
      payload({ type: "setPlaces", payload: [] });
      return [];
    }
    if (!state.userLocation) throw new Error("User location not found");

    payload({ type: "setLoadingPlaces" });

    console.log(converterStringToQuery(query));
    console.log(state.userLocation.join(","));
    const resp = await axios.get<PlacesResponse[]>(`${searchApi}&q=${converterStringToQuery(query)}`);
    const data = resp.data;

    if (data.length > 3) {
      const newData = data.filter((place) => {
        return place.display_name.toLowerCase().search(query.toLowerCase()) !== -1;
      });
      if (newData.length === 0) {
        payload({ type: "setPlaces", payload: data });
        return data;
      }
      payload({ type: "setPlaces", payload: newData });
      return newData;
    }
    

    payload({ type: "setPlaces", payload: resp.data });
    return resp.data;
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        searchPlacesByTerm,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
