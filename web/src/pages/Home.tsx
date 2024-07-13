// import Banner from "@components/Banner";
// import HowReStoreWorks from "@components/HowReStoreWorks";
import NavBar from "@components/NavBar";
import React from "react";
import {
    AdvancedMarker,
    APIProvider,
    Map,
    Pin,
} from "@vis.gl/react-google-maps";

const Home: React.FC = () => {
    const newZealandBounds = {
        north: -34.0,
        south: -47.0,
        west: 166.0,
        east: 179.0,
    };
    return (
        <div>
            <NavBar />
            {/* <Banner />
            <HowReStoreWorks /> */}
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <Map
                    style={{ width: "100%", height: "100vh" }}
                    defaultCenter={{ lat: -36.848461, lng: 174.763336 }}
                    defaultZoom={11}
                    gestureHandling={"greedy"}
                    disableDefaultUI={true}
                    mapId={"42a5de44a63d9064"}
                    restriction={{
                        latLngBounds: newZealandBounds,
                        strictBounds: false,
                    }}
                >
                    <AdvancedMarker
                        key="test"
                        position={{ lat: -36.848461, lng: 174.763336 }}
                    >
                        <Pin
                            background={"#FBBC04"}
                            glyphColor={"#000"}
                            borderColor={"#000"}
                        />
                    </AdvancedMarker>
                </Map>
            </APIProvider>

            {/* <div className="left-items">
                <div className="our-story">
                    <h1>Our Story</h1>
                    <p>Blah Blah</p>
                </div>
                <button>Shop Now</button>
            </div>
            <div className="right-items">
                <img src="hero.img" alt="hero image" />
            </div> */}
        </div>
    );
};

export default Home;
