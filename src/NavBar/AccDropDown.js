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
        <div className="User-Account">
          <FaUserCircle />
        </div>
        <div className="User-details">
          <span className="displayName">
            <h5>Logged in as:</h5>
            {/* <p>
              {user?.displayName === null && userData?.name !== undefined
                ? userData?.name
                : user?.displayName}
            </p> */}
            <p>{user && user?.displayName}</p>
          </span>
          <span>
            <p>{user && user?.email}</p>
          </span>

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
