import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiPlayCircle, BiPauseCircle, BiChevronRight } from "react-icons/bi";
import AClassSedan from "../../../Images/BENZ/A-Class-Sedan/A-Class-SEDAN-Video-use.mp4";

// h

const SecondSlide = () => {
  const [isplay, setIsplay] = useState(true);

  const videoRef = useRef();

  const handlePlay = () => {
    if (isplay) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsplay((currentplaying) => !currentplaying);
  };

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} muted loop playsInline>
        <source src={AClassSedan} type="video/mp4" />
      </video>
      {/* if button is active show if  not dont show */}
      <div className="btn-container">
        <button className="btn-play   " onClick={handlePlay}>
          {isplay ? <BiPauseCircle /> : <BiPlayCircle />}
        </button>
      </div>
      <div className="description">
        <h3 className="brand-type">Highlander</h3>
        <p className="chasephrase">Go above and beyond the ordinary.</p>
      </div>
      <NavLink to="Toyota/SUV/Highlander">
        <div className="more-info-container">
          <div className="more-info">Learn More</div>
          <div className="nav-arrow">
            <BiChevronRight />
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default SecondSlide;
