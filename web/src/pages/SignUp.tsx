import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";
import { useState } from "react";

function SignUp() {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // const handleSignInClick = () => {
    //     navigate("/sign-in");
    // };

    const handleSignUp = async () => {
        if (username && password) {
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_SERVER_URL}/api/user/`,
                    {
                        email: username,
                        name: name,
                        phoneNumber: phoneNumber,
                        password: password,
                    }
                );
                console.log(response.data);
                localStorage.setItem("user_id", response.data._id);
                navigate("/");
            } catch (error) {
                console.error("Error submitting form:", error);
                setError("Invalid email or password");
            }
        } else {
            console.log("no details");
            setError("Please enter valid details");
        }
    };

    return (
        <div className="admin-login-outer background-admin-login bg-primary">
            <div className="admin-login-left-items text-navy">
                <h1 className="passport-title-admin-login font-title text-navy">
                    ReStore
                </h1>
                <h2 className="dashboard-title-admin-login text-navy">
                    Reuse, Reduce, ReStore
                </h2>
                <div className="sign-in-form">
                    <input
                        type="text"
                        placeholder="Name"
                        className="input-field"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="input-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="input-field"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input-field mb-0"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && (
                        <p className="text-red-500 text-sm mb-2 ml-2">
                            {error}
                        </p>
                    )}
                    <button
                        onClick={handleSignUp}
                        className="ml-auto bg-navy text-primary font-semibold px-6 py-2 mt-2 rounded-xl"
                    >
                        SIGN UP
                    </button>
                </div>
                <p className="mb-6">
                    Have an account?{" "}
                    <Link className="underline" to="/login">
                        Login
                    </Link>
                </p>
                {/* <GoogleSigninBtn onClick={handleSignInClick} /> */}
            </div>
            <div className="admin-login-right-items bg-navy h-screen"></div>
        </div>
    );
}

export default SignUp;
