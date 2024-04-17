
import {
    BtnMyLocation,
    MapView,
    SearchBar
} from "../components/index";

export const HomeScreen = () => {
    return (
        <div>
            <SearchBar />
            <BtnMyLocation />
            <MapView />
        </div>
    );
}