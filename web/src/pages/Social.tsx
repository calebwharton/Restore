import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@components/Footer";
import NavBar from "../components/NavBar";
import "../styles/Social.css";
import trophy from "../assets/trophy.svg";
import silver from "../assets/silver.svg";
import bronze from "../assets/bronze.svg"


interface User {
    _id: string;
    name: string;
    totalAttended: number;
    points: number;
}

export default function Leaderboard() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const usersResponse = await axios.get(
                `${import.meta.env.VITE_SERVER_URL}/api/user/get-all-users`
            );
            const sortedUsers = usersResponse.data.sort((a: User, b: User) => b.points - a.points);
            setUsers(sortedUsers.slice(0, 10));
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="mx-20 mt-10">
                <h1 className="font-title text-4xl text-navy">LEADERBOARD</h1>
                <div className="border-t-4 w-full mb-2 border-navy rounded-xl" />

                <div className="board">
                    <div className="board-header">
                        <div className="column">RANKING</div>
                        <div className="column">NAME</div>
                        <div className="column">ATTENDED</div>
                        <div className="column">POINTS</div>
                    </div>
                    {users.length > 0 ? (
                        <ul className="event-list">
                            {users.map((user: User, index: number) => (
                                <li key={user._id} className={`board-row ${index === 0 ? 'rank-1' : ''}`}>
                                    <div className="column">
                                        {index === 0 ? (
                                            <img src={trophy} alt="1st Place" className="trophy" />
                                        ) : index === 1 ? (
                                            <img src={silver} alt="2nd Place" className="trophy" />
                                        ) : index === 2 ? (
                                            <img src={bronze} alt="3rd Place" className="trophy" />
                                        ) : (
                                            index + 1
                                        )}
                                    </div>
                                    <div className="column">{user.name}</div>
                                    <div className="column">{user.eventsAttended.length + user.eventsCreated.length}</div>
                                    <div className="column">{user.points}</div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}