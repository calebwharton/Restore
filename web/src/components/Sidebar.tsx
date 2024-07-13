import React, { useState } from "react";
import "../styles/Sidebar.css";

interface SidebarProps {
    selectedMarker: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedMarker }) => {
    const [isCreatingEvent, setIsCreatingEvent] = useState(false);
    // const [isInterested, setIsInterested] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState("");
    const [eventDate, setEventDate] = useState("");

    const handleCreateEvent = () => {
        setIsCreatingEvent(true);
    };

    const handleSaveEvent = () => {
        // Save event logic
        console.log(`Event created for ${selectedMarker} on ${eventDate}`);
        setIsCreatingEvent(false);
    };

    function goBack() {
        setIsCreatingEvent(false);
    }

    function handleClickEvent() {
        setSelectedEvent("Event");
    }
    function goBackFromEvent() {
        setSelectedEvent("");
    }

    return (
        <div className="sidebar">
            {selectedMarker ? (
                isCreatingEvent ? (
                    <div className="flex flex-col h-full w-full text-left">
                        <button onClick={goBack} className="font-bold ml-auto">
                            Back
                        </button>
                        <h2 className="text-xl font-bold ml-2">
                            Create Event for {selectedMarker}
                        </h2>
                        <h2 className="text-xl font-bold mt-4 ml-2">TITLE</h2>
                        <input
                            type="text"
                            className="w-full bg-primary py-2 px-4 rounded-xl"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                        />
                        <h2 className="text-xl font-bold mt-4 ml-2">DATE</h2>
                        <input
                            type="date"
                            className="w-full bg-primary py-2 px-4 rounded-xl"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                        />
                        <h2 className="text-xl font-bold mt-4 ml-2">
                            DESCRIPTION
                        </h2>
                        <textarea
                            className="w-full bg-primary py-2 px-4 rounded-xl"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                        />
                        <button
                            className="bg-navy text-primary font-semibold text-xl w-full rounded-xl py-3 mt-auto"
                            onClick={handleSaveEvent}
                        >
                            POST
                        </button>
                    </div>
                ) : selectedEvent ? (
                    <div className="flex flex-col h-full text-left">
                        <button
                            onClick={goBackFromEvent}
                            className="font-bold ml-auto"
                        >
                            Back
                        </button>
                        EVENT
                        <button
                            className="bg-navy text-primary font-semibold text-xl w-full rounded-xl py-3 mt-auto"
                            onClick={handleCreateEvent}
                        >
                            INTERESTED
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col h-full text-left">
                        <h1 className="text-2xl font-bold mb-6">
                            {selectedMarker}
                        </h1>
                        <div
                            className="text-left bg-primary mb-2 p-4 rounded-xl font-semibold  hover:cursor-pointer"
                            onClick={handleClickEvent}
                        >
                            <h2 className="text-xl font-bold">
                                {selectedMarker}
                            </h2>
                            <p>Location</p>
                            <p>Date</p>
                        </div>
                        <div
                            className="text-left bg-primary p-4 rounded-xl font-semibold hover:cursor-pointer"
                            onClick={handleClickEvent}
                        >
                            <h2 className="text-xl font-bold">
                                {selectedMarker}
                            </h2>
                            <p>Location</p>
                            <p>Date</p>
                        </div>

                        <button
                            className="bg-navy text-primary font-semibold text-xl w-full rounded-xl py-3 mt-auto"
                            onClick={handleCreateEvent}
                        >
                            CREATE
                        </button>
                    </div>
                )
            ) : (
                <div className="flex h-full welcome-message">
                    <div className="bg-primary px-6 py-12 my-auto rounded-xl">
                        <h2 className="font-title">Welcome to ReSTORE</h2>
                        <p className="text-sm">Reuse, Reduce, ReStore</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
