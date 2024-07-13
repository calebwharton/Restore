import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../styles/Navbar.css";

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
            <nav className="container mx-auto flex justify-between items-center ml-100">
                <div className="flex items-center space-x-8">
                    <Link to="/" className="px-6"><span className="text-offwhite font-title text-4xl">RESTORE</span></Link>
                    <Link to="/" className="px-6"><span className="menu-item text-offwhite text-lg">MAP</span></Link>
                    <Link to="/about" className="px-6"><span className="menu-item text-offwhite text-lg">ABOUT</span></Link>
                    <Link to="/social" className="px-6"><span className="menu-item text-offwhite text-lg">LEADERBOARD</span></Link>
                </div>
                <div>
                    {isUserLoggedIn() && (
                        <Link to="/profile" className="text-offwhite menu-icon">
                            <AccountCircleIcon fontSize="large" />
                        </Link>
                    )}
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
