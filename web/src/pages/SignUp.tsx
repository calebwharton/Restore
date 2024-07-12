import { useNavigate } from "react-router-dom";
import GoogleSigninBtn from "@components/sign-in-button";
import "../styles/login.css";

function SignUp() {
    const navigate = useNavigate();
    const handleSignInClick = () => {
        navigate("/sign-in");
    };

    return (
        <div className="admin-login-outer background-admin-login bg-primary">
            <div className="admin-login-left-items">
                <h1 className="passport-title-admin-login">ReStore</h1>
                <h2 className="dashboard-title-admin-login">
                    Reuse, Reduce, ReStore
                </h2>
                <div className="sign-in-form">
                    <input
                        type="text"
                        placeholder="Username"
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input-field"
                    />
                </div>
                Sign Up
                <GoogleSigninBtn onClick={handleSignInClick} />
            </div>
            <div className="admin-login-right-items bg-gprimary h-screen"></div>
        </div>
    );
}

export default SignUp;
