import { Link, useNavigate } from "react-router-dom";
import GoogleSigninBtn from "@components/sign-in-button";
import "../styles/login.css";

function Login() {
    const navigate = useNavigate();
    const handleSignInClick = () => {
        navigate("/sign-in");
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
                        placeholder="Username"
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input-field"
                    />
                </div>
                <p className="mb-6">
                    Dont have an account?{" "}
                    <Link className="underline" to="/signup">
                        SignUp
                    </Link>
                </p>
                <GoogleSigninBtn onClick={handleSignInClick} />
            </div>
            <div className="admin-login-right-items bg-navy h-screen"></div>
        </div>
    );
}

export default Login;
