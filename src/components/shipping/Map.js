import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { ReactComponent as Logo } from "./../../photo/icons/map-icon.svg";

const AnyReactComponent = () => <Logo width="64px" height="64px" />;

class TestSvg extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "300px", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent lat={59.955413} lng={30.337844} />
                </GoogleMapReact>
            </div>
        );
    }
}

export default TestSvg;
