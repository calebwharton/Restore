import React from "react";
import "../styles/AboutUs.css";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import TurtleDark from "../assets/turtle-navy.svg";
import CommunityImg from "../assets/community.svg";
import EnviroImg from "../assets/enviro.svg";
import RecycleImg from "../assets/recycle.svg";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const About: React.FC = () => {
  return (
    <div className="bg-offwhite">
      <NavBar />
      <div className="mx-20 mt-10">
        <h1 className="font-title text-4xl text-navy">OUR GOAL</h1>
        <div className="border-t-4 w-full mb-10 border-navy rounded-xl" />
        <div className="flex flex-col items-center justify-center text-center text-navy text-2xl overflow-hidden pb-28 pt-4">
          <div className="flex flex-wrap justify-center gap-2">
            <div className="flex flex-wrap justify-center px-4 w-full max-w-6xl gap-8">
              {/* Empowering Communities */}
              <div
                className="p-8 mx-auto bg-primary rounded-3xl shadow-xl border-4 text-center flex flex-col items-center flex-none"
                style={{ width: "330px", margin: "0.5rem" }}
              >
                <img
                  src={CommunityImg}
                  alt="Empowering Communities"
                  style={{
                    width: "400px",
                    height: "auto",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                  className="mb-3"
                />
                <h3 className="text-2xl font-bold mb-4 text-navy">
                  Empowering Communities
                </h3>
                <p className="text-navy text-lg">
                  Connect and collaborate with local volunteers committed to
                  keeping our beaches clean.
                </p>
              </div>

              {/* Driving Environmental Change */}
              <div
                className="pt-4 pb-8 px-8 mx-auto bg-primary rounded-3xl shadow-xl border-4 text-center flex flex-col items-center flex-none"
                style={{
                  width: "330px",
                  margin: "0.5rem",
                  paddingTop: "-100px",
                }}
              >
                <img
                  src={EnviroImg}
                  alt="Driving Environmental Change"
                  style={{
                    width: "400px",
                    height: "auto",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                  className="mb-3"
                />
                <h3 className="text-2xl font-bold mb-4 text-navy">
                  Driving Environmental Change
                </h3>
                <p className="text-navy text-lg">
                  Make a positive impact on our ecosystems by participating in
                  targeted cleanups.
                </p>
              </div>
              {/* Simplifying Cleanups */}
              <div
                className="p-8 mx-auto bg-primary rounded-3xl shadow-xl border-4  text-center flex flex-col items-center flex-none"
                style={{ width: "330px", margin: "0.5rem" }}
              >
                <img
                  src={RecycleImg}
                  alt="Simplifying Cleanups"
                  style={{
                    width: "400px",
                    height: "auto",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                  className="mb-3"
                />
                <h3 className="text-2xl font-bold mb-4 text-navy">
                  Simplifying Cleanups
                </h3>
                <p className="text-navy text-lg">
                  Effortlessly organise or join beach cleanup events through our
                  easy navigation in just a few clicks.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[1000px] md:w-[600px] pt-14">
            <p>
              Restore is a dedicated social network focused on beach cleanups.
              Our platform empowers communities by simplifying the process of
              creating, joining, and promoting cleanup events at local beaches,
              driving meaningful change to local environments.
            </p>
            <br />
            <p>
              Join us in making a difference - one piece of trash at a time.
            </p>
          </div>

          <button className="relative flex items-center justify-center h-12 w-32 sm:w-64 overflow-hidden bg-primary text-secondary font-bold py-6 px-6 mt-8 border-2 border-secondary rounded transition-all before:absolute before:top-0 before:left-0 before:h-full before:w-full before:rounded-full before:bg-secondary before:scale-0 before:transition-transform before:duration-500 before:ease-out hover:before:scale-150 hover:text-primary">
            <TravelExploreIcon className="relative z-10 mr-2" />
            <span className="relative z-10">GET STARTED</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
