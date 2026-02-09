import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  return (
    <MapContainer center={[35.6892, 51.389]} zoom={13} style={{ height: "100%", width: "100%", zIndex: "2" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[35.6892, 51.389]}>
        <Popup>شعبه اصلی</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
