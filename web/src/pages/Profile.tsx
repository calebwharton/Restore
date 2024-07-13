import Footer from "@components/Footer";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Profile() {
    const [data, setData] = useState([]);
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
            <div className="mx-20 mt-10">
                <h1 className="font-title text-4xl text-navy">DASHBOARD</h1>
                <div className="border-t-4 w-full mb-10 border-navy rounded-xl" />
            </div>
            <div className="left-items text-navy">
                <div className="profile-pic">
                    <img
                        src="@assets/logo.png"
                        alt="profile-pic"
                        className="w-24 h-24 rounded-full"
                    />
                </div>
                <div className="profile-stats">
                    <h2>Name: {data.name}</h2>
                    <h3>Points: {data.points}</h3>
                    <h3>Attended: x</h3>
                </div>
                <div className="recent-activities"></div>
            </div>
            <div className="right-items"></div>
            <Footer />
        </div>
    );
}
