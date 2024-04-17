import { useContext, useRef } from "react";
import { PlacesContext } from "../context";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const debounceRef = useRef<any>();
  const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(async () => {
      // console.log("searching for", e.target.value);
      // console.log("searching for", e.target.value);
      searchPlacesByTerm(e.target.value);
    }, 500);
  };
  return (
    <div
      className="search-bar"
      style={{
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 999,
        display: "flex",
        gap: 10,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <input
        type="text"
        placeholder="Buscar"
        className="form-control"
        style={{ border: "none", outline: "none", width: 280 }}
        onChange={onQueryChange}
      />
      <SearchResults/>
    </div>
  );
};
