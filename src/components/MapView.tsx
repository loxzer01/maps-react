import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { MapContext, PlacesContext } from "../context";
import { Loading } from ".";
import { Map } from "mapbox-gl";

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const {setMap} = useContext(MapContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading && mapDiv.current) {
      const map = new Map({
        container: mapDiv.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: userLocation as [number, number],
        zoom: 12,
      });
      setMap(map);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      ref={mapDiv}
      style={{
        width: "100vw",
        height: "100vh",
        left: "0",
        top: "0",
        position: "fixed",
      }}
    ></div>
  );
};
