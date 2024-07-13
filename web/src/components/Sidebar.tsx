import React, { useEffect, useState } from "react";
import "../styles/Sidebar.css";
import axios from "axios";

// interface LocationData {
//     _id: string;
//     locationName: string;
//     longitude: number;
//     latitude: number;
//     events: string[]; // Adjust as per actual structure
//     __v: number;
// }

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
    // const [isInterested, setIsInterested] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState("");
    const [events, setEvents] = useState([]);
    const [eventDate, setEventDate] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const user = localStorage.getItem("user_id");

    const handleCreateEvent = () => {
        setIsCreatingEvent(true);
    };

    // async function getEvent(id: string) {
    //     try {
    //         const event = await axios.post(
    //             `${import.meta.env.VITE_SERVER_URL}/api/event/byid/${id}`,
    //             {
    //                 eventName: title,
    //                 description: description,
    //                 place: location,
    //                 eventCreator: user,
    //             }
    //         );
    //         return event;
    //     } catch (error) {
    //         console.log("Error: ", error);
    //     }
    // }

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
        // create the event
        try {
            await axios
                .post(`${import.meta.env.VITE_SERVER_URL}/api/event/`, {
                    eventName: title,
                    description: description,
                    place: location,
                    date: eventDateObject,
                    eventCreator: user,
                })
                .then(async (response) => {
                    await axios.post(
                        `${
                            import.meta.env.VITE_SERVER_URL
                        }/api/location/add-event`,
                        {
                            locationName: location,
                            event: response.data._id,
                        }
                    );

                    await axios.post(
                        `${
                            import.meta.env.VITE_SERVER_URL
                        }/api/user/add-event-created`,
                        {
                            id: localStorage.getItem("user_id"),
                            eventId: response.data._id,
                        }
                    );

                    console.log(response);
                });
            setTitle("");
            setEventDate("");
            setDescription("");
            onEventCreated();
        } catch (error) {
            console.log("Error: ", error);
        }
        // try {
        //     console.log(newEvent.data);

        //     // add event to eventsCreated list of user
        //     await axios.post(
        //         `${import.meta.env.VITE_SERVER_URL}/api/user/add-event-created`,
        //         {
        //             id: localStorage.getItem("user_id"),
        //             eventId: newEvent.data._id,
        //         }
        //     );

        //     //add event to locattion
        //     await axios.post(
        //         `${import.meta.env.VITE_SERVER_URL}/api/location/add-event`,
        //         {
        //             locationName: newEvent.data.place,
        //             eventid: newEvent.data._id,
        //         }
        //     );
        // } catch (error) {
        //     console.log("Error: ", error);
        // }

        console.log(
            `Event created for ${selectedMarker} on ${eventDate}. Desription: ${description}`
        );

        setIsCreatingEvent(false);
    };

    function goBack() {
        setIsCreatingEvent(false);
    }

    async function handleClickEvent(event: string) {
        // setSelectedEvent("Event");

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
                `${
                    import.meta.env.VITE_SERVER_URL
                }/api/user/add-event-attended`,
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
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    function formatDate(dateString) {
        // Create a new Date object from the input string
        const date = new Date(dateString);

        // Define options for toLocaleDateString
        const options = { day: "numeric", month: "long", year: "numeric" };

        // Format the date
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
                                // console.log(e.target.value)
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
                            className="bg-navy text-primary font-semibold text-sxl w-full rounded-xl py-3 mt-auto"
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
                        {isUser && (
                            <button
                                className="bg-navy text-primary font-semibold text-xl w-full rounded-xl py-3 mt-auto"
                                onClick={handleInterestedEvent}
                            >
                                INTERESTED
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col h-full text-left">
                        <h1 className="text-2xl font-bold mb-6">
                            {selectedMarker}
                        </h1>

                        {events.map((event, key) => (
                            <div
                                key={key}
                                className="text-left bg-primary mb-2 p-4 rounded-xl font-semibold  hover:cursor-pointer"
                                onClick={() => handleClickEvent(event._id)}
                            >
                                <h2 className="text-xl font-bold">
                                    {event.eventName}
                                </h2>
                                <p>{event.place}</p>
                                <p>{formatDate(event.date)}</p>
                            </div>
                        ))}

                        {/* <div
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
                        </div> */}
                        {isUser && (
                            <button
                                className="bg-navy text-primary font-semibold text-xl w-full rounded-xl py-3 mt-auto"
                                onClick={handleCreateEvent}
                            >
                                CREATE
                            </button>
                        )}
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
