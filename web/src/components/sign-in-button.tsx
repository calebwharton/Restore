import "../styles/sign-in-button.css";

interface GoogleSignin {
    onClick: () => void;
    adminLogin?: boolean;
}

const GoogleSigninBtn = ({ onClick }: GoogleSignin) => {
    return (
        <button className={"button bg-navy"} onClick={onClick}>
            <h3>Sign In</h3>
        </button>
    );
};

export default GoogleSigninBtn;
