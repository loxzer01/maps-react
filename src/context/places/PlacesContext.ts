import { createContext } from "react";
import { PlacesResponse } from "../../interfaces";

export interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [number, number];
  //method
  searchPlacesByTerm: (query: string) => Promise<PlacesResponse[]>;
  places: PlacesResponse[];
  isLoadingPlaces: boolean;
}

export const PlacesContext = createContext<PlacesContextProps>(
  {} as PlacesContextProps
);
