import React, { useState } from "react";
import { GoogleMap, LoadScript, DrawingManager } from "@react-google-maps/api";
import Marker from "./marker";

const mapContainerStyle = {
  height: "400px",
  width: "800px"
};

// const center = {
//   // lat: 38.685,
//   // lng: -115.234
//   lat: 30.78650859999999,
//   lng: 31.0003757
// };

const options = {
  drawingControl: true,
  drawingControlOptions: {
    drawingModes: ["marker"]
  },
  polygonOptions: {
    fillColor: `#2196F3`,
    strokeColor: `#2196F3`,
    fillOpacity: 0.5,
    strokeWeight: 2,
    clickable: true,
    editable: true,
    draggable: true,
    zIndex: 1
  }
};

const Example = ({ values, setValues }) => {
  console.log('values props', values);
  const center = {
    lat: values.lat,
    lng: values.lon
  };
  const [pos, setPos] = useState({
    lat: values.lat,
    lng: values.lon
  });

  console.log('pos', pos);

  const onLoad = drawingManager => {
    console.log(drawingManager);
  };

  const onMarkerComplete = marker => {
    setPos({ ...center, lat: marker.position.lat(), lng: marker.position.lng() });
    marker.setMap(null);
    setValues({ ...values, lat: marker.position.lat(), lng: marker.position.lng() })
    console.log('values onMarkerComplete', values);
  };

  const onPolygonComplete = polygon => {
    console.log('polygon', polygon);
  };


  return (
    <>
      {/* kljdf */}
      <LoadScript
        id="script-loader"
        // googleMapsApiKey="AIzaSyC0QH9aiCXuuRjJe4k5lzAM2bYl-MUhiPk"
        // googleMapsApiKey="AIzaSyDNpb7EJVsFpdE1u2EfxvsfTsqAKkrlvxk"

        // googleMapsApiKey="AIzaSyBJOYgPJ1myt6ZpxPnZpmTB8GdAMGWpr-I"
        googleMapsApiKey="AIzaSyDQDC3VV5CGRaueUYpEEJ308KNx8zbG5t0"
        libraries={["drawing"]}
      >
        <GoogleMap
          id="drawing-manager-example"
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          // center={center}
          center={pos}
        >
          <DrawingManager
            onLoad={onLoad}
            drawingMode="marker"
            options={options}
            onMarkerComplete={onMarkerComplete}
            onPolygonComplete={onPolygonComplete}
          />
          <Marker position={pos} onUpdate={setPos} />
        </GoogleMap>
      </LoadScript>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </>
  );
};

export default Example;
