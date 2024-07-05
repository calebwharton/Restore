import GoogleIcon from "../assets/GoogleIcon.svg"
import '@styles/sign-in-button.css';

interface GoogleSignin {
  onClick: () => void;
  adminLogin?: boolean;
}

const GoogleSigninBtn = ({ onClick }: GoogleSignin) => {
  return(
  <button className={"button"} onClick={onClick}>
    <img src={GoogleIcon} alt="Google Icon" className={"icon"} />
    sign in
  </button>
  );
};

export default GoogleSigninBtn;