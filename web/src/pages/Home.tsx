import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ColourKey from "../components/ColourKey";
import Points from "../components/Points";
import {
    AdvancedMarker,
    APIProvider,
    Map,
    Pin,
} from "@vis.gl/react-google-maps";
import NavBarHome from "../components/NavBarHome";
import axios from "axios";
import { differenceInDays } from "date-fns";

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
    const [pinColors, setPinColors] = useState<{
        [key: string]: { background: string; borderColor: string };
    }>({});
    const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
    const [isSidebarVisible, setSidebarVisible] = useState<boolean>(true);

    const fetchData = async () => {
        try {
            const response = await axios.get<LocationData[]>(
                `${import.meta.env.VITE_SERVER_URL}/api/location/`
            );
            setData(response.data);
            // console.log(response.data);
        } catch (err) {
            console.error("Error fetching data:", err);
            // Handle error
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const fetchPinColors = async () => {
            const colors: {
                [key: string]: { background: string; borderColor: string };
            } = {};

            for (const poi of data) {
                let pinBackground = "#c2c2c2"; // Default to grey
                let pinBorderColor = "#c2c2c2"; // Default to grey

                if (poi.events && poi.events.length > 0) {
                    const eventDates: Date[] = [];
                    for (const eventId of poi.events) {
                        const event = await getEvent(eventId);
                        if (event) {
                            // console.log(event);

                            eventDates.push(event.date);
                        }
                    }

                    const today = new Date().toISOString();
                    const upcomingEvents = eventDates.filter(
                        (date) => date >= today
                    );

                    // console.log(upcomingEvents);

                    if (upcomingEvents.length > 0) {
                        const nearestEventDate = upcomingEvents.reduce((a, b) =>
                            a < b ? a : b
                        );
                        const daysUntilEvent = differenceInDays(
                            nearestEventDate,
                            new Date()
                        );

                        if (daysUntilEvent < 7) {
                            pinBackground = "#ff4a4a"; // Blue for events less than a week away
                            pinBorderColor = "#ff4a4a"; // Blue for events less than a week away
                        } else {
                            pinBackground = "#0096ff"; // Red for events more than a week away
                            pinBorderColor = "#0096ff"; // Red for events more than a week away
                        }
                    }
                }

                colors[poi.locationName] = {
                    background: pinBackground,
                    borderColor: pinBorderColor,
                };
            }

            setPinColors(colors);
        };

        fetchPinColors();
    }, [data]);

    const handleMarkerClick = async (key: string, events: string[]) => {
        setSelectedMarker(key);
        setSidebarVisible(true);
        setSelectedData(events);
    };

    async function getEvent(id: string) {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_SERVER_URL}/api/event/byid/${id}`
            );
            return response.data;
        } catch (error) {
            console.error(`Failed to fetch event with id ${id}:`, error);
            return null;
        }
    }

    async function refreshEvents() {
        try {
            fetchData();
            const response = await axios.get(
                `${
                    import.meta.env.VITE_SERVER_URL
                }/api/location/get-events/${selectedMarker}`
            );
            setSelectedData(response.data);
        } catch (err) {
            console.error("Error fetching data:", err);
            // Handle error
        }
    }

    return (
        <div>
            <NavBarHome />
            <Points />
            <ColourKey />
            <div className="flex w-full h-screen">
                <Sidebar
                    selectedMarker={selectedMarker}
                    data={selectedData}
                    onEventCreated={refreshEvents}
                />
                <div className={`${isSidebarVisible ? "w-full" : "w-full"}`}>
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
                                latLngBounds: {
                                    north: -36.3,
                                    south: -37.5,
                                    west: 172.5,
                                    east: 176.5,
                                },
                                strictBounds: false,
                            }}
                        >
                            {data.map((poi) => (
                                <AdvancedMarker
                                    key={poi.locationName}
                                    position={{
                                        lat: poi.longitude,
                                        lng: poi.latitude,
                                    }}
                                    onClick={() =>
                                        handleMarkerClick(
                                            poi.locationName,
                                            poi.events
                                        )
                                    }
                                >
                                    <Pin
                                        background={
                                            pinColors[poi.locationName]
                                                ?.background || "#c2c2c2"
                                        }
                                        glyphColor={"#FFFFFF"}
                                        borderColor={
                                            pinColors[poi.locationName]
                                                ?.borderColor || "#c2c2c2"
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
