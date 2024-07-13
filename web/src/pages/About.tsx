import React from "react";
import "../styles/AboutUs.css";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import Trust from "../assets/trust.png";

const About: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <NavBar />
            <div className="mx-20 mt-10">
                <h1 className="font-title text-4xl text-navy">OUR GOAL</h1>
                <div className="border-t-4 w-full mb-10 border-navy rounded-xl" />
                <div className="grid grid-cols-2">
                    <div className="text-navy text-2xl overflow-hidden">
                        <p>
                            Restore is a dedicated social network for beach
                            cleanups. Restore is designed to empower communities
                            by making it easier for people to create, join, and
                            promote cleanup events at their local beaches,
                            fostering real change in local communities.
                        </p>
                        <br />
                        {/* <p>
                            When you shop with us, the proceeds from every sale
                            go directly to supporting charities. Sellers are not
                            just decluttering- they're actively contributing to
                            a greater cause, earning virtual coins with each
                            sale. These coins can be used for discounts on
                            future purchases, making sustainable shopping even
                            more rewarding.
                        </p>
                        <br /> */}
                        <p>
                            Join us in making a difference - one item at a time.
                        </p>
                    </div>
                    <div className="mx-auto">
                        {/* CHANGE THIS */}
                        <img src={Trust} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
