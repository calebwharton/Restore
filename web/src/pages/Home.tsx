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

    type Poi = { key: string; location: google.maps.LatLngLiteral };
    const locations: Poi[] = [
        { key: "Piha Beach", location: { lat: -36.9526, lng: 174.4722 } },
        {
            key: "Ninety Mile Beach",
            location: { lat: -34.5333, lng: 173.0167 },
        },
        { key: "Hot Water Beach", location: { lat: -36.8256, lng: 175.8311 } },
        { key: "Whangamata Beach", location: { lat: -37.2036, lng: 175.8678 } },
        {
            key: "Mount Maunganui Beach",
            location: { lat: -37.6363, lng: 176.1833 },
        },
        { key: "Papamoa Beach", location: { lat: -37.6996, lng: 176.2896 } },
        { key: "Karekare Beach", location: { lat: -36.9826, lng: 174.4621 } },
        {
            key: "Castlepoint Beach",
            location: { lat: -40.9061, lng: 176.2083 },
        },
        { key: "Orewa Beach", location: { lat: -36.5875, lng: 174.6942 } },
        { key: "Raglan Beach", location: { lat: -37.8011, lng: 174.8675 } },
        { key: "Whale Bay", location: { lat: -35.1938, lng: 173.7833 } },
        { key: "Cathedral Cove", location: { lat: -36.8278, lng: 175.7922 } },
        { key: "Orokawa Bay", location: { lat: -37.5144, lng: 175.9 } },
        { key: "Takapuna Beach", location: { lat: -36.7863, lng: 174.7744 } },
        {
            key: "Waiheke Island Beaches",
            location: { lat: -36.7973, lng: 175.1083 },
        },
    ];

    return (
        <div>
            <NavBar />
            {/* <Banner />
            <HowReStoreWorks /> */}
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <Map
                    style={{ width: "100%", height: "100vh" }}
                    // styles={mapStyles}
                    defaultCenter={{ lat: -36.848461, lng: 174.763336 }}
                    defaultZoom={11}
                    gestureHandling={"greedy"}
                    disableDefaultUI={true}
                    mapId={"f838f316061bfba4"}
                    // mapTypeId={google.maps.MapTypeId.ROADMAP}
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
                    {locations.map((poi: Poi) => (
                        <AdvancedMarker key={poi.key} position={poi.location}>
                            <Pin
                                background={"#FBBC04"}
                                glyphColor={"#000"}
                                borderColor={"#000"}
                            />
                        </AdvancedMarker>
                    ))}
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
