import React from "react";
import "../styles/AboutUs.css";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import Trust from "../assets/trust.png";

const About: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-20 mt-10">
        <h1 className="font-title text-4xl text-navy">OUR GOAL</h1>
        <div className="border-t-4 w-full mb-10 border-navy rounded-xl" />
        <div className="grid grid-cols-2">
          <div className="text-navy text-2xl overflow-hidden">
            <p>
              Restore is a dedicated social network focused on beach cleanups.
              Our platform empowers communities by simplifying the process of
              creating, joining, and promoting cleanup events at local beaches,
              driving meaningful change to local environments.
            </p>
            <br />
            <p>Join us in making a difference - one piece of trash at a time.</p>
          </div>
          <div className="mx-auto">
            {/* CHANGE THIS */}
            <img src={Trust} alt="" />
          </div>
          <div className = "p-64"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
