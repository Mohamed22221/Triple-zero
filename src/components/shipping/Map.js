import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { ReactComponent as Logo } from "./../../photo/icons/map-icon.svg";

const AnyReactComponent = () => <Logo width="64px" height="64px" />;

const TestSvg = ({ values }) => {

    // center: {
    //     // lat: 30.0444196,
    //     // lng: 31.2357116,
    //     // lat: 59.95,
    //     // lng: 30.33
    //     // lat: this.props.values.lon,
    //     // lng: this.props.values.lat
    // },
    // zoom: 11

    const [state, setstate] = useState({
        lat: 0,
        lng: 0
        // lat: 30.78650859999999,
        // lng: 31.0003757,
        // zoom: 11
    });

    const [zomm, setZomm] = useState(11);

    useEffect(() => {
        setstate({ lat: values.lat, lng: values.lon })
        setZomm(17)
        console.log('state', state);
    }, [values])

    return (
        <div style={{ height: "300px", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={state}
                center={state}

                defaultZoom={11}
                zoom={zomm}
            >
                <AnyReactComponent lat={state.lat} lng={state.lng} />
            </GoogleMapReact>
        </div>
    );
};

export default TestSvg;
