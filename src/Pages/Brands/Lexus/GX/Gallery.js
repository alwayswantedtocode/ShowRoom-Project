import React, { useState, useRef } from "react";
import gallerydata from "./Data/GalleryData";

const Gallery = () => {
    const slideRef = useRef();
 let slidewidth = slideRef.current?.clientWidth;
    const [activeImage, setActiveImage] = useState(0);

    const prevImage = (currentImage) => {
      setActiveImage(
        (currentImage - 1 + gallerydata.length) % gallerydata.length
      );
    };

    const nextImage = (currentImage) => {
      setActiveImage((currentImage + 1) % gallerydata.length);
    };

  return (
    <div className="Gallery-slider-container">
      <div
        className="gallery-relative-containter"
        // style={{ height: slidecoverHeight }}
        style={{ transform: "translateX(-" + slidewidth * activeImage + "px" }}
        // ref={slideRef}
        ref={slideRef}
      >
        {gallerydata.map((gallery, index) => {
          const { id, src } = gallery;
          return (
            <div
              className={`gallery-slider ${
                activeImage === index ? "active" : ""
              }`}
              key={id}
            >
              <img src={src} alt="" />
            </div>
          );
        })}
      </div>
      <button className="prev-btn" onClick={() => prevImage(activeImage)}>
        Previous
      </button>
      <button className="next-btn" onClick={() => nextImage(activeImage)}>
        Next
      </button>
    </div>
  );
};

export default Gallery;
