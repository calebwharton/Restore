import React, { useState } from "react";
// import NavBar from "@components/NavBar";
import Sidebar from "@components/Sidebar";
import ColourKey from "@components/ColourKey";

import {
    AdvancedMarker,
    APIProvider,
    Map,
    Pin,
} from "@vis.gl/react-google-maps";
import NavBarHome from "@components/NavBarHome";

const Home: React.FC = () => {
    const newZealandBounds = {
        north: -36.5,
        south: -37.5,
        west: 172.5,
        east: 176.5,
    };

    type Poi = { key: string; location: google.maps.LatLngLiteral };
    const locations: Poi[] = [
        { key: "Orewa Beach", location: { lat: -36.5875, lng: 174.6942 } },
        { key: "Takapuna Beach", location: { lat: -36.7863, lng: 174.7744 } },
        { key: "Okahu Bay Beach", location: { lat: -36.846, lng: 174.796 } },
        {
            key: "Mission Bay Auckland",
            location: { lat: -36.848, lng: 174.829 },
        },
        { key: "Kendall Bay Beach", location: { lat: -36.821, lng: 174.747 } },
        { key: "Long Bay Beach", location: { lat: -36.6833, lng: 174.7489 } },
        { key: "Green Bay Beach", location: { lat: -36.927, lng: 174.696 } },
        {
            key: "Point Chevalier Beach",
            location: { lat: -36.8573, lng: 174.7026 },
        },
        { key: "Devonport Beach", location: { lat: -36.83, lng: 174.793 } },
        { key: "Herne Bay Beach", location: { lat: -36.836, lng: 174.738 } },
        {
            key: "Campbells Bay Beach",
            location: { lat: -36.749, lng: 174.759 },
        },
        { key: "Charcoal Bay Beach", location: { lat: -36.829, lng: 174.728 } },
        { key: "Mairangi Bay Beach", location: { lat: -36.733, lng: 174.749 } },
        { key: "Sentinel Rd Beach", location: { lat: -36.836, lng: 174.738 } },
        { key: "St Leonards Bay", location: { lat: -36.827, lng: 174.751 } },
        { key: "Narrow Neck Beach", location: { lat: -36.818, lng: 174.799 } },
        { key: "Ladies Bay Beach", location: { lat: -36.852, lng: 174.869 } },
        { key: "St Heliers Beach", location: { lat: -36.852, lng: 174.869 } },
        { key: "Chelsea Bay Beach", location: { lat: -36.824, lng: 174.719 } },
    ];

    const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
    const [isSidebarVisible, setSidebarVisible] = useState<boolean>(true);

    const handleMarkerClick = (key: string) => {
        setSelectedMarker(key);
        setSidebarVisible(true);
    };

    // const toggleSidebar = () => {
    //     setSidebarVisible(!isSidebarVisible);
    // };

    return (
        <div>
            <NavBarHome />
            <ColourKey />
            <div className="flex w-full h-screen">
                <Sidebar selectedMarker={selectedMarker} />

                <div className={`${isSidebarVisible ? "w-full" : "w-full"}`}>
                    <APIProvider
                        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                    >
                        <Map
                            style={{ width: "100%", height: "100vh" }}
                            defaultCenter={{ lat: -36.848461, lng: 174.763336 }}
                            defaultZoom={13}
                            gestureHandling={"greedy"}
                            disableDefaultUI={true}
                            mapId={"f838f316061bfba4"}
                            restriction={{
                                latLngBounds: newZealandBounds,
                                strictBounds: false,
                            }}
                        >
                            {locations.map((poi: Poi) => (
                                <AdvancedMarker
                                    key={poi.key}
                                    position={poi.location}
                                    onClick={() => handleMarkerClick(poi.key)}
                                >
                                    <Pin
                                        background={"#FBBC04"}
                                        glyphColor={"#000"}
                                        borderColor={"#000"}
                                    />
                                </AdvancedMarker>
                            ))}
                        </Map>
                    </APIProvider>
                </div>
            </div>
        </div>
    );
};

export default Home;
