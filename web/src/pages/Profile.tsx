import Footer from "@components/Footer";
import NavBar from "../components/NavBarProfile";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Profile.css";
import PointIcon from "@mui/icons-material/Timeline";
import AttendIcon from "@mui/icons-material/FmdGood";
import CreateIcon from "@mui/icons-material/Create";

interface User {
    name: string;
    points: number;
    email: string;
    phoneNumber: string;
    eventsAttended: { name: string; date: string; location: string }[];
    eventsCreated: string[];
}

interface Event {
    eventName: string;
    date: string;
    place: string;
}

export default function Profile() {
    const [data, setData] = useState<User | null>(null);
    const [attendedEvents, setAttendedEvents] = useState<Event[]>([]);
    const [createdEvents, setCreatedEvents] = useState<Event[]>([]);
    const userId = localStorage.getItem("user_id");

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch user data
                const response = await axios.get(
                    `${import.meta.env.VITE_SERVER_URL}/api/user/get/${userId}`
                );
                setData(response.data);
                console.log(response.data);

                // Fetch event details for each attended event
                const eventRequests = response.data.eventsAttended.map(
                    async (eventId: string) => {
                        const eventResponse = await axios.get(
                            `${
                                import.meta.env.VITE_SERVER_URL
                            }/api/event/byid/${eventId}`
                        );
                        return eventResponse.data;
                    }
                );

                const events = await Promise.all(eventRequests);
                setAttendedEvents(events);

                // Fetch event details for each attended event
                const ceventRequests = response.data.eventsCreated.map(
                    async (eventId: string) => {
                        const eventResponse = await axios.get(
                            `${
                                import.meta.env.VITE_SERVER_URL
                            }/api/event/byid/${eventId}`
                        );
                        return eventResponse.data;
                    }
                );

                const cevents = await Promise.all(ceventRequests);
                setCreatedEvents(cevents);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        fetchData();
    }, [userId]);

    return (
        <div className="bg-offwhite min-h-screen">
            <NavBar />
            <div className="mx-20 pb-28 mt-10">
                <h1 className="font-title text-4xl font-bold text-navy">
                    DASHBOARD
                </h1>
                <hr className="border-t-4 border-navy mb-8" />
                {data ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <div className="bg-primary p-6 rounded-lg shadow-md mb-8">
                                <h2 className="text-2xl font-bold text-navy mb-4">
                                    PERSONAL INFO
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                readOnly
                                                value={data.name}
                                                className="block w-full text-[#7c96a9] px-3 py-2 bg-textboxbg border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                readOnly
                                                value={data.email}
                                                className="block w-full text-[#7c96a9] px-3 py-2 bg-textboxbg border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Phone
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                readOnly
                                                value={data.phoneNumber}
                                                className="block w-full text-[#7c96a9] px-3 py-2 bg-textboxbg border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-primary p-6 rounded-lg shadow-md mb-8">
                                <h2 className="text-2xl font-bold text-navy mb-4">
                                    STATISTICS
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="text-center bg-textboxbg p-4 rounded-lg shadow flex flex-row items-center justify-between space-x-4">
                                        <PointIcon className="text-navy custom-icon-size" />
                                        <div>
                                            <p className="text-3xl font-bold text-navy">
                                                {data.points}
                                            </p>
                                            <p className="text-lg text-navy">
                                                POINTS COLLECTED
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-center bg-textboxbg p-4 rounded-lg shadow flex flex-row items-center justify-between space-x-4">
                                        <AttendIcon className="h-10 w-10 text-navy custom-icon-size" />
                                        <div>
                                            <p className="text-3xl font-bold text-navy">
                                                {data.eventsAttended.length}
                                            </p>
                                            <p className="text-lg text-navy">
                                                EVENTS ATTENDED
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-center bg-textboxbg p-4 rounded-lg shadow flex flex-row items-center justify-between space-x-4">
                                        <CreateIcon className="h-10 w-10 text-navy custom-icon-size" />
                                        <div>
                                            <p className="text-3xl font-bold text-navy">
                                                {data.eventsCreated.length}
                                            </p>
                                            <p className="text-lg text-navy">
                                                EVENTS CREATED
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary p-6 rounded-lg shadow-md pb-5">
                                <h2 className="text-2xl font-bold text-navy mb-4">
                                    RECENT ACTIVITY
                                </h2>
                                <table className="w-full text-left text-navy">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">NAME</th>
                                            <th className="px-4 py-2">DATE</th>
                                            <th className="px-4 py-2">
                                                LOCATION
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {attendedEvents.map((event, index) => (
                                            <tr
                                                key={index}
                                                className="border-t"
                                            >
                                                <td className="px-4 py-2">
                                                    {event.eventName}
                                                </td>
                                                <td className="px-4 py-2">
                                                    {new Date(
                                                        event.date
                                                    ).toLocaleDateString()}
                                                </td>
                                                <td className="px-4 py-2">
                                                    {event.place}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-primary p-6 rounded-lg shadow-md pb-5 mt-6">
                                <h2 className="text-2xl font-bold text-navy mb-4">
                                    CREATED EVENTS
                                </h2>
                                <table className="w-full text-left text-navy">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">NAME</th>
                                            <th className="px-4 py-2">DATE</th>
                                            <th className="px-4 py-2">
                                                LOCATION
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {createdEvents.map((event, index) => (
                                            <tr
                                                key={index}
                                                className="border-t"
                                            >
                                                <td className="px-4 py-2">
                                                    {event.eventName}
                                                </td>
                                                <td className="px-4 py-2">
                                                    {new Date(
                                                        event.date
                                                    ).toLocaleDateString()}
                                                </td>
                                                <td className="px-4 py-2">
                                                    {event.place}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <div className="bg-primary p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold text-navy mb-4">
                                    ACHIEVEMENTS
                                </h2>
                                <div className="pb-96">
                                    {/* Add content for achievements */}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
            <Footer />
        </div>
    );
}
