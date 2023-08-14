import React, { useState, useRef } from "react";
import gallerydata from "./Data/GalleryData";

const Gallery = () => {
  const slideRef = useRef();
  const heightRef = useRef();

  let slidewidth = slideRef.current?.clientWidth;
  let slidecoverHeight = heightRef.current?.clientHeight;

  const [activeImage, setActiveImage] = useState(null);
  const [slideindex, setSlideIndex] = useState(0);

  return (
    <div className="Gallery-slider-container">
      <div
        className="gallery-relative-containter"
        // style={{ height: slidecoverHeight }}
        // style={{ transform: "translateX(-" + slidewidth * slideindex + "px" }}
        // ref={slideRef}
      >
        {gallerydata.map((gallery, index) => {
          const { id, src } = gallery;
          return (
            <div className="gallery-slider" key={id} ref={slidecoverHeight}>
              <img src={src} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
