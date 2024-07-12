// import Banner from "@components/Banner";
// import HowReStoreWorks from "@components/HowReStoreWorks";
import NavBar from "@components/NavBar";
import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const Home: React.FC = () => {
    return (
        <div>
            <NavBar />
            {/* <Banner />
            <HowReStoreWorks /> */}
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <Map
                    style={{ width: "100vw", height: "100vh" }}
                    defaultCenter={{ lat: 22.54992, lng: 0 }}
                    defaultZoom={3}
                    gestureHandling={"greedy"}
                    disableDefaultUI={true}
                />
            </APIProvider>

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
