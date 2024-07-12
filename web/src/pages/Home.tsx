import Banner from "@components/Banner";
import HowReStoreWorks from "@components/HowReStoreWorks";
import NavBar from "@components/NavBar";
import React from "react";

const Home: React.FC = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <HowReStoreWorks />

            <div className="left-items">
                <div className="our-story">
                    <h1>Our Story</h1>
                    <p>Blah Blah</p>
                </div>
                <button>Shop Now</button>
            </div>
            <div className="right-items">
                <img src="hero.img" alt="hero image" />
            </div>
        </div>
    );
};

export default Home;
