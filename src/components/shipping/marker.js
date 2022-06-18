import React, { useState, useEffect } from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";

const CustomMarker = ({ position, onUpdate }) => {
  const [markerRef, setMarkerRef] = useState();
  const [isInfoShown, setIsInfoShown] = useState(false);

  const toggleMarker = () => {
    setIsInfoShown(!isInfoShown);
  };

  const onMarkerDrag = ({ latLng }) => {
    onUpdate({ lat: latLng.lat(), lng: latLng.lng() });
  };

  return (
    <>
      {isInfoShown && (
        <InfoWindow
          anchor={markerRef}
          onCloseClick={() => {
            console.log("close clicked");
            setIsInfoShown(false);
          }}
        >
          <div
            style={{
              background: `white`,
              border: `1px solid #ccc`,
              padding: 15
            }}
          >
            <h1>InfoWindow</h1>
          </div>
        </InfoWindow>
      )}
      <Marker
        position={position}
        draggable={true}
        onDragEnd={onMarkerDrag}
        onLoad={setMarkerRef}
        onClick={toggleMarker}
      />
    </>
  );
};

export default CustomMarker;
