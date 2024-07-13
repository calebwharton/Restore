import React, { useState } from "react";
import NavBar from "@components/NavBar";
import Sidebar from "@components/Sidebar";

import {
    AdvancedMarker,
    APIProvider,
    Map,
    Pin,
} from "@vis.gl/react-google-maps";

const Home: React.FC = () => {
    const newZealandBounds = {
        north: -36.5,
        south: -37.5,
        west: 174.5,
        east: 175.5,
    };

    type Poi = { key: string; location: google.maps.LatLngLiteral };
    const locations: Poi[] = [
        { key: "Orewa Beach", location: { lat: -36.5875, lng: 174.6942 } },
        { key: "Takapuna Beach", location: { lat: -36.7863, lng: 174.7744 } },
        { key: "Okahu Bay Beach", location: { lat: -36.8460, lng: 174.7960 } },
        { key: "Mission Bay Auckland", location: { lat: -36.8480, lng: 174.8290 } },
        { key: "Kendall Bay Beach", location: { lat: -36.8210, lng: 174.7470 } },
        { key: "Long Bay Beach", location: { lat: -36.6833, lng: 174.7489 } },
        { key: "Green Bay Beach", location: { lat: -36.9270, lng: 174.6960 } },
        { key: "Point Chevalier Beach", location: { lat: -36.8573, lng: 174.7026 } },
        { key: "Devonport Beach", location: { lat: -36.8300, lng: 174.7930 } },
        { key: "Herne Bay Beach", location: { lat: -36.8360, lng: 174.7380 } },
        { key: "Campbells Bay Beach", location: { lat: -36.7490, lng: 174.7590 } },
        { key: "Charcoal Bay Beach", location: { lat: -36.8290, lng: 174.7280 } },
        { key: "Mairangi Bay Beach", location: { lat: -36.7330, lng: 174.7490 } },
        { key: "Sentinel Rd Beach", location: { lat: -36.8360, lng: 174.7380 } },
        { key: "St Leonards Bay", location: { lat: -36.8270, lng: 174.7510 } },
        { key: "Narrow Neck Beach", location: { lat: -36.8180, lng: 174.7990 } },
        { key: "Ladies Bay Beach", location: { lat: -36.8520, lng: 174.8690 } },
        { key: "St Heliers Beach", location: { lat: -36.8520, lng: 174.8690 } },
        { key: "Chelsea Bay Beach", location: { lat: -36.8240, lng: 174.7190 } },
        
        

    ];

    const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
    const [isSidebarVisible, setSidebarVisible] = useState<boolean>(true);

    const handleMarkerClick = (key: string) => {
        setSelectedMarker(key);
        setSidebarVisible(true);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div>
            <NavBar />
            <div className="flex w-full h-screen">
            <Sidebar selectedMarker={selectedMarker} />

                <div className={`${isSidebarVisible ? "w-full" : "w-full"}`}>
                    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
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