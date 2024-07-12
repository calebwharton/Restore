import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutUs.css";

const About: React.FC = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-left">
                    <span className="logo">Placeholder Logo</span>
                </div>
                <div className="navbar-right">
                    <Link to="/home">Home</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/generic-page-one">Page 1</Link>
                    <Link to="/generic-page-two">Page 2</Link>
                </div>
            </nav>
            <div className="page-outer background-page">
                <div className="page-inner">
                    <h1>AboutUs</h1>
                </div>
            </div>
        </div>
    );
};

export default About;
