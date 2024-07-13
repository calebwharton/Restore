import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar"; // Adjust path as per your actual file structure
import ColourKey from "../components/ColourKey"; // Adjust path as per your actual file structure
import {
    AdvancedMarker,
    APIProvider,
    Map,
    Pin,
} from "@vis.gl/react-google-maps"; // Assuming correct installation and import for @vis.gl/react-google-maps
import NavBarHome from "../components/NavBarHome"; // Adjust path as per your actual file structure
import axios from "axios";

interface LocationData {
    _id: string;
    locationName: string;
    longitude: number;
    latitude: number;
    events: string[]; // Adjust as per actual structure
    __v: number;
}

const Home: React.FC = () => {
    const [data, setData] = useState<LocationData[]>([]);
    const [selectedData, setSelectedData] = useState<string[]>([]);
    const fetchData = async () => {
        try {
            const response = await axios.get<LocationData[]>(
                `${import.meta.env.VITE_SERVER_URL}/api/location/`
            );
            setData(response.data);
            console.log(response.data);
        } catch (err) {
            console.error("Error fetching data:", err);
            // Handle error
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const newZealandBounds = {
        north: -36.3,
        south: -37.5,
        west: 172.5,
        east: 176.5,
    };

    type Poi = {
        key: string;
        location: google.maps.LatLngLiteral;
        events: string[];
    };
    const locations: Poi[] = data.map((item) => ({
        key: item.locationName,
        location: { lat: item.longitude, lng: item.latitude },
        events: item.events,
    }));

    // const locations: Poi[] = [
    //     { key: "Orewa Beach", location: { lat: -36.5875, lng: 174.6942 } },
    // ];

    const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
    const [isSidebarVisible, setSidebarVisible] = useState<boolean>(true);

    const handleMarkerClick = (key: string, events: string[]) => {
        setSelectedMarker(key);
        setSidebarVisible(true);
        setSelectedData(events);
        // console.log(events);
    };

    async function refreshEvents() {
        try {
            const response = await axios.get(
                `${
                    import.meta.env.VITE_SERVER_URL
                }/api/location/get-events/${selectedMarker}`
            );
            console.log(response.data);
            setSelectedData(response.data);
        } catch (err) {
            console.error("Error fetching data:", err);
            // Handle error
        }
    }

    return (
        <div>
            <NavBarHome />
            <ColourKey />
            <div className="flex w-full h-screen">
                <Sidebar
                    selectedMarker={selectedMarker}
                    data={selectedData}
                    onEventCreated={refreshEvents}
                />

                <div className={`${isSidebarVisible ? "w-full" : "w-full"}`}>
                    {/* <p>{data[0].latitude}</p> */}
                    <APIProvider
                        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                    >
                        <Map
                            style={{ width: "100%", height: "100vh" }}
                            defaultCenter={{ lat: -36.848461, lng: 174.763336 }}
                            defaultZoom={13}
                            gestureHandling="greedy"
                            disableDefaultUI={true}
                            mapId="f838f316061bfba4"
                            restriction={{
                                latLngBounds: newZealandBounds,
                                strictBounds: false,
                            }}
                        >
                            {locations.map((poi: Poi) => (
                                <AdvancedMarker
                                    key={poi.key}
                                    position={poi.location}
                                    onClick={() =>
                                        handleMarkerClick(poi.key, poi.events)
                                    }
                                >
                                    <Pin
                                        background={
                                            poi.events && poi.events.length > 0
                                                ? "#ff4a4a"
                                                : "#c2c2c2"
                                        }
                                        glyphColor={"#FFFFFF"}
                                        borderColor={
                                            poi.events && poi.events.length > 0
                                                ? "#ff4a4a"
                                                : "#c2c2c2"
                                        }
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
