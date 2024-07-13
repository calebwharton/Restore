import React from "react";
import "../styles/AboutUs.css";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

const About: React.FC = () => {
    return (
        <div>
            <NavBar />
            <div className="mx-20 mt-10">
                <h1 className="font-title text-4xl text-navy">OUR GOAL</h1>
                <div className="border-t-4 w-full mb-10 border-navy rounded-xl" />
                <div className="grid grid-cols-2">
                    <div className="text-navy text-xl overflow-hidden">
                        <p>
                            At ReStore, our mission is to transform shopping
                            into a platform for environmental sustainability.
                            Our online marketplace not only rehomes pre-loved
                            items but also supports charitable causes.
                        </p>
                        <br />
                        <p>
                            When you shop with us, the proceeds from every sale
                            go directly to supporting charities. Sellers are not
                            just decluttering- they're actively contributing to
                            a greater cause, earning virtual coins with each
                            sale. These coins can be used for discounts on
                            future purchases, making sustainable shopping even
                            more rewarding.
                        </p>
                        <br />
                        <p>
                            Join us in making a difference - one item at a time.
                        </p>
                    </div>
                    <div>PLACEHOLDER</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
