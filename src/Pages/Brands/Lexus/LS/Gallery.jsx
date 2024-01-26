import React, { useState, useRef } from "react";
import gallerydata from "./Data/GalleryData";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Gallery = () => {
  const [images, setImages] = useState(gallerydata);
  const [activeImage, setActiveImage] = useState(7);
  const slideRef = useRef();
  let slidewidth = slideRef.current?.clientWidth;

  //  const slideLeft = () => {
  //    let last = images.slice(-1);
  //    let rest = images.slice(0, -1);
  //    let newImages = [last, ...rest];
  //    setImages(newImages);
  //  };

  //  const slideRight = () => {
  //    const [first, ...rest] = images;
  //    const newImages = [...rest, first];
  //    setImages(newImages);
  //  };

  const slideLeft = () => {
    const newImages = [...images];
    const last = newImages.pop();
    newImages.unshift(last);
    setImages(newImages);

  };

  const slideRight = () => {
    const newImages = [...images];
    const first = newImages.shift();
    newImages.push(first);
    setImages(newImages);
  };

  return (
    <div className="Gallery-wrapper">
      <div
        className="gallery-slider-containter"
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
                slideLeft();
              } else {
                slideRight();
              }
            }
          });

          e.target.addEventListener("touchend", () => {
            e.target.removeEventListener("touchmove", null);
          });
        }}
      >
        {images.map((gallery, index) => {
          const { id, src } = gallery;
          return (
            <div
              className={`gallery-slider ${
                activeImage === index ? "active " : ""
              }`}
              key={id}
            >
              <img src={src} alt="" />
            </div>
          );
        })}
      </div>
      <div className="ctrl-btn-container">
        <button className="prev-btn" onClick={slideLeft}>
          <BsChevronLeft />
        </button>
        <button className="next-btn" onClick={slideRight}>
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
