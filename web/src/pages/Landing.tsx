import { useNavigate } from "react-router-dom";
import GoogleSigninBtn from "@components/sign-in-button";
import "../styles/login.css";
import { bouncy } from "ldrs";

function AdminLogin() {
    const navigate = useNavigate();
    const handleSignInClick = () => {
        navigate("/sign-in");
    };

    bouncy.register();

    return (
        <div className="admin-login-outer background-admin-login bg-primary">
            <div className="admin-login-left-items">
                <h2 className="welcome-title-admin-login">Welcome to the</h2>
                <h1 className="passport-title-admin-login">Brainies</h1>
                <h2 className="dashboard-title-admin-login">Project</h2>
                <GoogleSigninBtn onClick={handleSignInClick} />
            </div>
            <div className="admin-login-right-items bg-gprimary h-screen">
            </div>
        </div>
    );
}

export default AdminLogin;
