import Selling from "../assets/selling.png";
import Trust from "../assets/trust.png";
import Buying from "../assets/buying.png";

const HowReStoreWorks = () => {
    return (
        <div className="bg-primary p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-accent">
                How ReStore Works
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex flex-col items-start p-4 bg-secondary rounded-3xl">
                    <p className="text-white bg-accent py-1 px-6 rounded-lg">
                        STEP 1
                    </p>
                    <p className="text-center text-accent">
                        Sell any goods you no longer need
                    </p>
                    <img
                        src={Selling}
                        alt={"fe"}
                        className="w-20 h-20 mb-4 mx-auto"
                    />
                </div>
                <div className="flex flex-col items-start p-4 bg-secondary rounded-3xl">
                    <p className="text-white bg-accent py-1 px-6 rounded-lg">
                        STEP 2
                    </p>
                    <p className="text-center text-accent">
                        Select your goods and place your order
                    </p>
                    <img
                        src={Trust}
                        alt={"fe"}
                        className="w-20 h-20 mb-4 mx-auto"
                    />
                </div>
                <div className="flex flex-col items-start p-4 bg-secondary rounded-3xl">
                    <p className="text-white bg-accent py-1 px-6 rounded-lg">
                        STEP 3
                    </p>
                    <p className="text-center text-accent">
                        All revenue goes to charity
                    </p>
                    <img
                        src={Buying}
                        alt={"fe"}
                        className="w-20 h-20 mb-4 mx-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default HowReStoreWorks;
