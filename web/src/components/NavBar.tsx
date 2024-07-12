import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="">
            <nav className="navbar bg-gprimary py-6">
                <div className="navbar-left">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                </div>
                <div className="navbar-center">
                    <span className="logo font-title text-4xl">ReStore</span>
                </div>
                <div className="navbar-right">
                    <Link to="/store">SHOP</Link>
                    <Link to="/sell">SELL</Link>
                </div>
            </nav>
        </div>
    );
}
