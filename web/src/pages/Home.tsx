import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-left">
                    <Link to="/home">Home</Link>
                    <Link to="/about-us">About Us</Link>
                </div>
                <div className="navbar-center">
                    <span className="logo">Placeholder Name</span>
                </div>
                <div className="navbar-right">
                    <Link to="/page-one">Page 1</Link>
                    <Link to="/page-two">Page 2</Link>
                </div>
            </nav>
            <div className='page-outer background-page'>
                <div className='page-inner'>
                    <h1>Home</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
