import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import GoogleSigninBtn from "@components/sign-in-button";
import "../styles/login.css";
import axios from "axios";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    // const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSignIn = async () => {
        if (username && password) {
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_SERVER_URL}/api/user/check-user`,
                    {
                        email: username,
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
            setError("Please enter a valid email and password");
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
                        placeholder="Email"
                        className="input-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        onClick={handleSignIn}
                        className="ml-auto bg-navy text-primary font-semibold px-6 py-2 rounded-xl mt-2"
                    >
                        SIGN IN
                    </button>
                </div>
                <p className="mt-6">
                    Don't have an account?{" "}
                    <Link className="underline" to="/signup">
                        SignUp
                    </Link>
                </p>
                {/* <GoogleSigninBtn /> */}
            </div>
            <div className="admin-login-right-items bg-navy h-screen"></div>
        </div>
    );
};

export default Login;
