import NavBar from "@components/NavBar";
import React from "react";

const Events: React.FC = () => {
    return (
        <div>
            <NavBar />
            <div className="header">
                <h1>Store</h1>
                <img src="" alt="symbol" />
                <img src="" alt="symbol" />
                <img src="" alt="symbol" />
            </div>
            <div className="grid">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
        </div>
    );
};

export default Events;
