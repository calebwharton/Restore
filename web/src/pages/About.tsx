import React from "react";
import "../styles/AboutUs.css";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import TurtleDark from "../assets/turtle-navy.svg";

const About: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-20 mt-10">
        <h1 className="font-title text-4xl text-navy">OUR GOAL</h1>
        <div className="border-t-4 w-full mb-10 border-navy rounded-xl" />
          <div className="flex flex-col items-center justify-center text-center text-navy text-2xl overflow-hidden pb-28">
            <div className="lg:w-[1000px] md:w-[600px]">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
