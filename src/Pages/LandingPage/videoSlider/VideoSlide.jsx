import React, { useState, useRef, useEffect } from "react";
import Data from "../LandingPagedata";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "./slider.css";


const VideoSlide = () => {

  const [videoslide] = useState(Data);
  const [index, setIndex] = useState(0);

 const videoRuntime = 11000

  const slideRef = useRef();
  const heightRef = useRef();

  let slidewidth = slideRef.current?.clientWidth;
  let slidecoverHeight = heightRef.current?.clientHeight;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((index) => (index < videoslide.length - 1 ? index + 1 : 0));
    },videoRuntime);
    return () => clearInterval(slideInterval);
  }, [index, videoslide]);
  
 
  

  const nextHandle = () => {
    const indexSlide = index < videoslide.length - 1 ? index + 1 : 0;
    setIndex(indexSlide);
  };
  const prevHandle = () => {
    const indexSlide = index > 0 ? index - 1 : videoslide.length - 1;
    setIndex(indexSlide);
  };
  return (
    <section className="first-section" style={{ height: slidecoverHeight }}>
      <article
        className="SlideContainer"
        style={{ transform: "translateX(-" + slidewidth * index + "px" }}
        ref={slideRef}
      >
        {videoslide.map((clips, clipIndex) => {
          const { video, id } = clips;
          //create active slide
          let slide = "slide";
          let position = "";
          if (clipIndex === index) {
            position = "active";
          }
          return (
            <div
              key={id}
              className={`${slide} ${position}`}
              style={{ left: clipIndex * 100 + "%" }}
              ref={heightRef}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                let xStart = touch.clientX;
                let yStart = touch.clientY;

                e.target.addEventListener("touchmove", (e) => {
                  const touchMove = e.touches[0];
                  let xDiff = touchMove.clientX - xStart;
                  let yDiff = touchMove.clientY - yStart;

                  if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    if (xDiff > 0) {
                      prevHandle();
                    } else {
                      nextHandle();
                    }
                  }
                });

                e.target.addEventListener("touchend", () => {
                  e.target.removeEventListener("touchmove", null);
                });
              }}
            >
              <div className="vid-slide">{video}</div>
            </div>
          );
        })}
      </article>
      <div className="slide-btn-container">
        <button className="left-btn" onClick={prevHandle}>
          <BiChevronLeft />
        </button>
        <button className="right-btn" onClick={nextHandle}>
          <BiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default VideoSlide;
