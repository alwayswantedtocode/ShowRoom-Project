import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Global Conext/AuthenticationContext";
import "./Navbar.css";

const AccDropDown = () => {
  const { user, userData, SignOutUser } = useAuthContext();

  // const navigate = useNavigate();



  return (
    <div className="User">
      <div className="User-content">
        <div className="User-Image">
          <FaUserCircle />
        </div>
        <div className="User-details">
          <div className="displayName">
            <h5>Logged in as:</h5>

            <p style={{border:"2px solid brown"}}>{user && user?.displayName}</p>
          </div>
          <div className="displayEmail">
            <p>{user && user?.email}</p>
          </div>

          {/* <p>{user?.email}</p> */}
        </div>
      </div>
      <div className="Signout-btn">
        <button className="SignOut" onClick={SignOutUser}>
          SignOut
        </button>
      </div>
    </div>
  );
};
export default AccDropDown;
