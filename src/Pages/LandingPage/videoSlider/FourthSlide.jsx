import React, { useState, useRef, useEffect } from "react";
import MayBach from "../../../Images/BENZ/Mercedes-Maybach/Maybach-use.mp4";
import { NavLink } from "react-router-dom";
import { BiPlayCircle, BiPauseCircle, BiChevronRight } from "react-icons/bi";

// l

const FourthSlide = () => {
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
        <source src={MayBach} type="video/mp4" />
      </video>
      {/* if button is active show if  not dont show */}
      <div className="btn-container">
        <button className="btn-play   " onClick={handlePlay}>
          {isplay ? <BiPauseCircle /> : <BiPlayCircle />}
        </button>
      </div>
      <div className="maybach-Description">
        <p className="maybach-chasephrase">THE MERCEDES-MAYBACH ---</p>
        <h3 className="maybach-brand-type">GLS SUV</h3>
        <p className="maybach-chasephrase">The value is in the virtues</p>
      </div>
      <NavLink to="Mercedes/SUV/MayBach">
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

export default FourthSlide;
