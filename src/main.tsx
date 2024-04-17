import React from "react";
import ReactDOM from "react-dom/client";
import MapsApp from "./MapsApp.tsx";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"


mapboxgl.accessToken = "pk.eyJ1IjoiZGFsaWxhZGV2IiwiYSI6ImNsczlvMXJxMjA4Z3cyanFrNjZ1eng4ZjMifQ.oiLdGjjdEUNyiQQP3LCnHQ";

if (!navigator.geolocation) {
  console.log("tu navegador no soporta geolocalización");
  throw new Error("tu navegador no soporta geolocalización");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
