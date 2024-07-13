import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../styles/Navbar.css";
 

export default function NavBar() {
    return (
        <div className="bg-gray-800 py-6">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <Link to="/" className="px-6"><span className="text-offwhite font-title text-4xl">RESTORE</span></Link>
                    <Link to="/" className="px-6"><span className="menu-item text-offwhite text-lg">MAP</span></Link>
                    <Link to="/about" className="px-6"><span className="menu-item text-offwhite text-lg">ABOUT</span></Link>
                    <Link to="/social" className="px-6"><span className="menu-item text-offwhite text-lg">SOCIAL</span></Link>
                </div>
                <div>
                    <Link to="/profile" className="text-offwhite menu-icon">
                        <AccountCircleIcon fontSize="large" />
                    </Link>
                </div>
            </nav>
        </div>
    );
}