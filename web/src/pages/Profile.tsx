import Footer from "@components/Footer";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Profile.css";

interface User {
    name: string;
    points: number;
    email: string;
    phone: string;
    eventsAttended: { name: string; date: string; location: string }[];
    eventsCreated: string[];
}

export default function Profile() {
    const [data, setData] = useState<User | null>(null);
    const userId = localStorage.getItem("user_id");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_SERVER_URL}/api/user/get/${userId}`
                );
                setData(response.data);
                console.log(response.data);
            } catch (err) {
                console.error("Error fetching data:", err);
                // Handle error
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-offwhite min-h-screen">
            <NavBar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-navy mb-4">DASHBOARD</h1>
                <hr className="border-t-4 border-navy mb-8" />
                {data ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                                <h2 className="text-2xl font-bold text-navy mb-4">PERSONAL INFO</h2>
                                <p className="text-lg font-semibold">{data.name}</p>
                                <p className="text-lg">{data.email}</p>
                                <p className="text-lg">{data.phone}</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                                <h2 className="text-2xl font-bold text-navy mb-4">STATISTICS</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="text-center bg-gray-100 p-4 rounded-lg shadow">
                                        <p className="text-3xl font-bold">{data.points}</p>
                                        <p className="text-lg">POINTS</p>
                                    </div>
                                    <div className="text-center bg-gray-100 p-4 rounded-lg shadow">
                                        <p className="text-3xl font-bold">{data.eventsAttended.length}</p>
                                        <p className="text-lg">EVENTS ATTENDED</p>
                                    </div>
                                    <div className="text-center bg-gray-100 p-4 rounded-lg shadow">
                                        <p className="text-3xl font-bold">{data.eventsCreated.length}</p>
                                        <p className="text-lg">EVENTS CREATED</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold text-navy mb-4">RECENT ACTIVITY</h2>
                                <table className="w-full text-left">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">NAME</th>
                                            <th className="px-4 py-2">DATE</th>
                                            <th className="px-4 py-2">LOCATION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.eventsAttended.map((event, index) => (
                                            <tr key={index} className="border-t">
                                                <td className="px-4 py-2">{event.name}</td>
                                                <td className="px-4 py-2">{event.date}</td>
                                                <td className="px-4 py-2">{event.location}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold text-navy mb-4">ACHIEVEMENTS</h2>
                                {/* Add content for achievements */}
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
