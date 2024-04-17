import { useContext } from "react";
import { MapContext, PlacesContext } from "../context";

export const BtnMyLocation = () => {
  const { map } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (map && userLocation) {
      map.flyTo({ center: userLocation,zoom: 19});
    }

    throw new Error("Not implemented");
  };

  return (
    <button
      className="btn btn-primary"
      style={{
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 1,
      
      }}
        onClick={onClick}
    >
      Mi Ubicacion
    </button>
  );
};
