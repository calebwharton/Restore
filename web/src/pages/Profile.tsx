import Footer from "@components/Footer";
import NavBar from "../components/NavBar";
export default function Profile() {
    return (
        <div>
            <NavBar />
            <div className="mx-20 mt-10">
                <h1 className="font-title text-4xl text-navy">DASHBOARD</h1>
                <div className="border-t-4 w-full mb-10 border-navy rounded-xl" />
            </div>
            <div className="left-items">
                <div className="profile-pic">
                <img src="@assets/logo.png" alt="profile-pic" className="w-24 h-24 rounded-full" />

                </div>
                <div className="profile-stats">
                    <h2>Name</h2>
                    <h3>Points: x</h3>
                    <h3>Attended: x</h3>
                </div>
                <div className="recent-activities">

                </div>
            </div>
            <div className="right-items">

            </div>
            <Footer />
        </div>
    );
}
