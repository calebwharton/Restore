import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-left">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className="navbar-center">
                    <span className="logo">ReStore</span>
                </div>
                <div className="navbar-right">
                    <Link to="/shop">Shop</Link>
                    <Link to="/se;;">Sell</Link>
                </div>
            </nav>
            <div className='left-items'>
                <div className='our-story'>
                    <h1>Our Story</h1>
                    <p>Blah Blah</p>
                </div>
                <button>Shop Now</button>
            </div>
            <div className='right-items'>
                <img src="hero.img" alt="hero image" />
            </div>
        </div>
    );
}

export default Home;
