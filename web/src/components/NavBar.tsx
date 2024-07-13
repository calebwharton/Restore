import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function NavBar() {
    return (
        <div className="bg-gray-800 py-6">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <Link
                        to="/"
                        className="text-offwhite font-title text-4xl px-6"
                    >
                        RESTORE
                    </Link>
                    <Link to="/about" className="text-offwhite text-lg px-6">
                        ABOUT
                    </Link>
                    <Link
                        to="/createevent"
                        className="text-offwhite text-lg px-6"
                    >
                        CREATE
                    </Link>
                    <Link
                        to="/leaderboard"
                        className="text-offwhite text-lg px-6"
                    >
                        LEADERBOARD
                    </Link>
                </div>
                <div>
                    <Link to="/profile" className="text-offwhite">
                        <AccountCircleIcon fontSize="large" />
                    </Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </div>
    );
}
