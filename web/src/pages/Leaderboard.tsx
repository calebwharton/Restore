import Footer from "@components/Footer";
import NavBar from "../components/NavBar";

export default function Leaderboard() {
    return (
        <div>
            <NavBar />
            <div className="mx-20 mt-10">
                <h1 className="font-title text-4xl text-navy">LEADERBOARD</h1>
                <div className="border-t-4 w-full mb-10 border-navy rounded-xl" />
            </div>
            <Footer />
        </div>
    );
}
