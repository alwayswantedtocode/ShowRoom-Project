import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import SlideMenu from "../NavBar/SlideMenu";
import Footer from "../Footer/Footer";
import Account from "../NavBar/Account";

// import Navigation from "../NavBar/Navigation";
const Home = () => {
  return (
    <>
      <div style={{position:"relative"}}>
        <Navbar />
        {/* <Account/> */}
        <SlideMenu />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default Home;
