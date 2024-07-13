import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function NavBar() {
    const navigate = useNavigate();
    // utils/auth.ts
    const getUserID = (): string | null => {
        return localStorage.getItem("user_id");
    };

    const isUserLoggedIn = (): boolean => {
        return getUserID() !== null;
    };

    function handleLogOut() {
        localStorage.removeItem("user_id");
        navigate("/");
    }

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
                    {isUserLoggedIn() ? (
                        <button
                            onClick={handleLogOut}
                            className="text-primary ml-2"
                        >
                            LOGOUT
                        </button>
                    ) : (
                        <Link to="/login" className="text-primary ml-2">
                            LOGIN
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    );
}
