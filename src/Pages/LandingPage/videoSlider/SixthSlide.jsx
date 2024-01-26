import React, { useState, useRef, useEffect } from "react";
import LxLexus from "../../../Images/LEXUS/LX600/Lx-Video-Edit-2-use.mp4";
import { BiPlayCircle, BiPauseCircle, BiChevronRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
// e

const SixthSlide = () => {
  const [isplay, setIsplay] = useState(true);

  const videoRef = useRef();
  // const containerRef =useRef();

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
        <source src={LxLexus} type="video/mp4" />
      </video>
      {/* if button is active show if  not dont show */}
      <div className="btn-container">
        <button className="btn-play   " onClick={handlePlay}>
          {isplay ? <BiPauseCircle /> : <BiPlayCircle />}
        </button>
      </div>
      <div className="description">
        <h3 className="brand-type">Lexus Lx 600 </h3>
        <p className="chasephrase">Luxury re-imagined on wheels</p>
      </div>
      <NavLink to="Lexus/SUV/LX">
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

export default SixthSlide;
