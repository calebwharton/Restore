import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="">
            <nav className="navbar bg-gprimary text-primary py-6">
                <div className="navbar-left">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT US</Link>
                </div>
                <div className="navbar-center">
                    <span className="logo font-title text-4xl">ReStore</span>
                </div>
                <div className="navbar-right">
                    <Link to="/events">EVENTS</Link>
                    <Link to="/leaderboard">LEADERBOARD</Link>
                    <Link to="/profile">Profile</Link>
                </div>
            </nav>
        </div>
    );
}
