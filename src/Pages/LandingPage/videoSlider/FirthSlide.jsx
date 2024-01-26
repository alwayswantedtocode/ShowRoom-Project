import React, { useState, useRef, useEffect } from "react";
import ToyotaCrown from "../../../Images/TOYOTAL/crown/Toyota-crown-use.mp4";
import { BiPlayCircle, BiPauseCircle, BiChevronRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
// j

const FirthSlide = () => {
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
        <source src={ToyotaCrown} type="video/mp4" />
      </video>
      {/* if button is active show if  not dont show */}
      <div className="btn-container">
        <button className="btn-play   " onClick={handlePlay}>
          {isplay ? <BiPauseCircle /> : <BiPlayCircle />}
        </button>
      </div>
      <div className="description">
        <h3 className="brand-type">Toyota Crown</h3>
        <p className="chasephrase">Innovation dialed up.</p>
      </div>
      <NavLink to="Toyota/Sedan/Crown">
        <div className="more-info-container">
          <div className="more-info"> Learn More</div>
          <div className="nav-arrow">
            <BiChevronRight />
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default FirthSlide;
