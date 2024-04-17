import { useContext } from "react";
import { MapContext, PlacesContext } from "../context";
import { PlacesResponse } from "../interfaces";

export const SearchResults = () => {
  const { places, isLoadingPlaces } = useContext(PlacesContext);
    const {map} = useContext(MapContext);

    const onClickDirections = (place: PlacesResponse) => {
        if(!map) return;
        const [lng, lat] = [Number(place.lon), Number(place.lat)];
        map.flyTo({
            center: [lng, lat],
            // essential: true,
            zoom: 14
        })
    }


  if (isLoadingPlaces)
    return (
      <div className="alert alert-primary">
        <h6>Buscando</h6>
        <p>Espere por favor...</p>
      </div>
    );

  return (
    <ul className="list-group" style={{ position: "absolute", top: "110%" }}>
      {places.map((place) => {
        return (
          <li
            key={place.place_id}
            className="list-group-item list-group-item-action"
            style={{ cursor: "pointer" }}
          >
            <h6>{place.class}</h6>
            <p
              className="text-muted"
              style={{
                fontSize: 12,
              }}
            >
              {place.display_name}
            </p>
            <button className="btn btn-outline-primary btn-sm" onClick={()=>onClickDirections(place)}>
              Direcciones
            </button>
          </li>
        );
      })}
    </ul>
  );
};
