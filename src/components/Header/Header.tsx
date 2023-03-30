import "./Header.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Header = () => {
  const { googleSigIn, isAuth, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="headerContainer">
      <div className="headerLogo">
        <img
          src="https://allevents.s3.amazonaws.com/media-kit/ae-logo.png"
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="headerButtonContainer">
        {isAuth ? (
          <>
            <button
              className="headerButton"
              onClick={() => {
                navigate("/add");
              }}
            >
              Add Events
            </button>
            <button
              className="headerButton"
              onClick={() => {
                logout();
              }}
            >
              {" "}
              LogOut
            </button>
          </>
        ) : (
          <button
            className="headerButton"
            onClick={async () => {
              try {
                await googleSigIn();
              } catch (err) {
                console.log(err);
              }
            }}
          >
            Login With Google
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
