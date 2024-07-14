import React, { useEffect, useState } from "react";
import "../styles/Sidebar.css";
import axios from "axios";

interface SidebarProps {
    selectedMarker: string | null;
    data: string[] | [];
    onEventCreated: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    selectedMarker,
    data,
    onEventCreated,
}) => {
    const [isCreatingEvent, setIsCreatingEvent] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState("");
    const [events, setEvents] = useState([]);
    const [eventDate, setEventDate] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const user = localStorage.getItem("user_id");

    const handleCreateEvent = () => {
        setIsCreatingEvent(true);
    };

    const getEvents = async () => {
        try {
            const eventRequests = data.map(async (id) => {
                const response = await axios.get(
                    `${import.meta.env.VITE_SERVER_URL}/api/event/byid/${id}`
                );
                return response.data;
            });

            const events = await Promise.all(eventRequests);
            console.log(events);
            setEvents(events);
        } catch (error) {
            console.error("Error fetching events:", error);
            return [];
        }
    };

    const handleSaveEvent = async () => {
        const eventDateObject = new Date(eventDate);
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/api/event/`,
                {
                    eventName: title,
                    description: description,
                    place: location,
                    date: eventDateObject,
                    eventCreator: user,
                }
            );

            await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/api/location/add-event`,
                {
                    locationName: location,
                    event: response.data._id,
                }
            );

            await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/api/user/add-event-created`,
                {
                    id: localStorage.getItem("user_id"),
                    eventId: response.data._id,
                }
            );

            console.log(response);
            setTitle("");
            setEventDate("");
            setDescription("");
            onEventCreated();
        } catch (error) {
            console.log("Error: ", error);
        }

        console.log(
            `Event created for ${selectedMarker} on ${eventDate}. Description: ${description}`
        );

        setIsCreatingEvent(false);
    };

    function goBack() {
        setIsCreatingEvent(false);
    }

    async function handleClickEvent(event: string) {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_SERVER_URL}/api/event/byid/${event}`
            );
            console.log(response.data);
            setSelectedEvent(response.data);
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    function goBackFromEvent() {
        setSelectedEvent("");
    }

    const handleInterestedEvent = async () => {
        try {
            await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/api/user/add-event-attended`,
                {
                    id: localStorage.getItem("user_id"),
                    eventId: selectedEvent._id,
                }
            );

            await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/api/event/add-attendee`,
                {
                    eventId: selectedEvent._id,
                    userId: localStorage.getItem("user_id"),
                }
            );

            setPopupMessage("You have successfully attended the event!");
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000);

            onEventCreated();
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    async function handleOptOut() {
        try {
            await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/api/event/remove-attendee`,
                {
                    eventId: selectedEvent._id,
                    userId: localStorage.getItem("user_id"),
                }
            );

            setPopupMessage("You have successfully opted out of the event.");
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000);

            onEventCreated();
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: "numeric", month: "long", year: "numeric" };
        const formattedDate = date.toLocaleDateString("en-GB", options);
        return formattedDate;
    }

    useEffect(() => {
        if (selectedMarker) {
            setLocation(selectedMarker);
            setSelectedEvent("");
        }
        if (user) {
            setIsUser(true);
        }
        getEvents();
    }, [selectedMarker, data]);

    return (
        <div className="sidebar">
            {showPopup && (
                <div className="popup">
                    <p className="pop">{popupMessage}</p>
                </div>
            )}
            {selectedMarker ? (
                isCreatingEvent ? (
                    <div className="flex flex-col h-full w-full text-left">
                        <button onClick={goBack} className="font-bold ml-auto">
                            Back
                        </button>
                        <h2 className="text-xl font-bold ml-2">
                            Create Event for {selectedMarker}
                        </h2>
                        <h2 className="text-xl font-bold mt-4 ml-2">
                            ACTIVITY NAME
                        </h2>
                        <input
                            type="text"
                            className="w-full bg-primary py-2 px-4 rounded-xl"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
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
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Please enter the event time and a brief description."
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
                        <div className="bg-primary h-full w-full mb-6 p-4 rounded-xl">
                            <h1 className="font-bold text-xl ">
                                {selectedEvent.eventName}
                            </h1>
                            <p>{selectedMarker}</p>
                            <p>{formatDate(selectedEvent.date)}</p>
                            <p>{selectedEvent.description}</p>
                        </div>
                        {isUser &&
                            (selectedEvent.atendees.includes(user) ? (
                                <button
                                    className="bg-gray-600 text-primary font-semibold text-xl w-full rounded-xl py-3 mt-auto"
                                    onClick={handleOptOut}
                                >
                                    Opt Out
                                </button>
                            ) : (
                                <button
                                    className="bg-navy hover:bg-gray-600 text-primary font-semibold text-xl w-full rounded-xl py-3 mt-auto"
                                    onClick={handleInterestedEvent}
                                >
                                    Attend Event!
                                </button>
                            ))}
                    </div>
                ) : (
                    <div className="flex flex-col h-full text-left">
                        <h1 className="text-2xl font-bold mb-6">
                            {selectedMarker}
                        </h1>
                        {events.length == 0 ? (
                            <div>
                                <p className="font-semibold text-xl">
                                    Currently, there are no community volunteer
                                    cleaning events scheduled at this location.
                                    Check back later or consider hosting one
                                    yourself
                                </p>
                            </div>
                        ) : (
                            events.map((event, key) => (
                                <div
                                    key={key}
                                    className="text-left bg-primary mb-2 p-4 rounded-xl font-semibold  hover:cursor-pointer"
                                    onClick={() => handleClickEvent(event._id)}
                                >
                                    <h2 className="text-xl font-bold">
                                        {event.eventName}
                                    </h2>
                                    <p>{formatDate(event.date)}</p>
                                </div>
                            ))
                        )}
                        <div className="mt-auto flex flex-col gap-2">
                            <button
                                className="bg-navy text-primary font-semibold text-xl w-full rounded-xl py-3"
                                onClick={handleCreateEvent}
                            >
                                Create Event
                            </button>
                        </div>
                    </div>
                )
            ) : (
                <div>
                    <h2 className="text-xl font-bold mb-4">
                        Select a marker to view events.
                    </h2>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
