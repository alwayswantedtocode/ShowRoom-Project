import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import VideoSlide from "./videoSlider/VideoSlide";
import VehiclesSlide from "./newVehicles/VehiclesSlide";
import VehicleDisplay from "./ShowRoom/VehicleDisplay";
import Electrified from "./Electrified/Electrified";
import { auth, onAuthStateChanged } from "../../Firebase";
import { useGlobalContext } from "../../Global Conext/GlobalContext";


const LandingPage = () => {
  const { setUser } = useGlobalContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="main-container">
      <VideoSlide />
      <VehiclesSlide />
      <VehicleDisplay />
      <Electrified />
      
    </main>
  );
};

export default LandingPage;
