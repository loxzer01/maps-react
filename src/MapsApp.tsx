import { MapProvider, PlacesProvider } from "./context";
import { HomeScreen } from "./screens";

export default function MapsApp() {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
}
