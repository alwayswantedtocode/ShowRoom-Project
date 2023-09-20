import React from "react";
import "./LandingPage.css";
import VideoSlide from "./videoSlider/VideoSlide";
import VehiclesSlide from "./newVehicles/VehiclesSlide";
import VehicleDisplay from "./ShowRoom/VehicleDisplay"
import Electrified from "./Electrified/Electrified";

const LandingPage = () => {
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
