import React from "react";

import { Marker, useMapEvents } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

const MapPage = ({ lat, lon, onMapClick }) => {
  function LocationMarker() {
    useMapEvents({
      click(e) {
        onMapClick(e.latlng.lat, e.latlng.lng);
      },
    });
    return lat && lon ? <Marker position={[lat, lon]} /> : null;
  }

  return (
    <div
      className="relative w-full h-[60vh] flex justify-center items-center overflow-hidden border-2 border-blue-500 rounded-md">
      <MapContainer
        center={[lat, lon]}
        zoom={10}
        className="absolute top-0 left-0 right-0 bottom-0 w-[100%]
         "
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> AYUSH'
          minZoom={3}
          maxZoom={19}
          
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default MapPage;
