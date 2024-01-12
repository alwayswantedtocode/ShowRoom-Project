import { FaUserCircle } from "react-icons/fa";
import { useAuthContext } from "../Global Conext/AuthenticationContext";
import "./Navbar.css";
import { useGlobalContext } from "../Global Conext/GlobalContext"
import { useRef,useEffect } from "react";

const AccDropDown = () => {
  const accDropdownRef=useRef()
  const { user, SignOutUser } = useAuthContext();
  const { AccountRef, showAside, setShowAside } = useGlobalContext();

  // const navigate = useNavigate();

  const openAacDropdown = ()=>{
setShowAside(true)
  }

  // Scroll greater than zero to close Submenu
  const handleScroll = () => {
    if (openAacDropdown && accDropdownRef.current && window.scrollY > 0) {
      setShowAside(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAside, handleScroll]);

  return (
    <div className="User" ref={accDropdownRef}>
      <div className="User-content">
        <div className="User-Image">
          <FaUserCircle />
        </div>
        <div className="User-details">
          <div className="displayName">
            <h5>Logged in as:</h5>
            <p style={{ marginTop: "10px" }}>{user && user?.displayName}</p>
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
