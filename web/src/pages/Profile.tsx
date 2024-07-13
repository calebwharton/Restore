import Footer from "@components/Footer";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Profile.css"

interface User {
    name: string;
    points: number;
    email: string;
    phone: string;
    attendedEvents: string[];
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
        <div>
            <NavBar />
            <div className="profile-container mx-20 mt-10">
                <h1 className="profile-title">DASHBOARD</h1>
                <hr className="title-line" />
                {data ? (
                    <div className="profile-details">
                        <div className="profile-info">
                            <h2 className="profile-name">Name: {data.name}</h2>
                            <h3 className="events-attended">Events Attended: {data.attendedEvents.length}</h3>
                            <h3 className="profile-points">Points: {data.points}</h3>
                            <h3 className="profile-email">Email: {data.email}</h3>
                            <h3 className="profile-phone">Phone: {data.phone}</h3>
                        </div>
                    </div>
                ) : (
                    <h2>Loading...</h2>
                )}
                <hr className="title-line" />
                <div className="recent-activities">
                    <h2 className="profile-title">Recently Attended Events</h2>
                    <table className="events-table">
                        <thead>
                            <tr>
                                <th>Event</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.attendedEvents.map((event, index) => (
                                <tr key={index}>
                                    <td>{event}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}
