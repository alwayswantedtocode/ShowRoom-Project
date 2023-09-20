import React,{useEffect} from "react";
import {
  exteriorheading,
  performanceheading,
  galleryheading,
  designheading,
  techheading,
} from "./Data/ModelData";
import Hero from "../../../../Images/BENZ/E-Class-Sedan/mercedes-benz-e-class-2024-16.png";
import Card from "./Card";
import Exterior from "./Exterior";
import Performance from "./Performance";
import Design from "./Design";
import Gallery from "./Gallery";
// import "../Lexus.css";

const Main = () => {

   useEffect(() => {
     // Scroll to the top of the page when the component is mounted
     window.scrollTo(0, 0);
   }, []);
   
  return (
    <main className="Model-Main">
      {/* Hero */}
      <div className="Hero-container">
        <div className="Hero">
          <img src={Hero} alt="" />
        </div>
        <div className="card">
          <Card />
        </div>
      </div>

      {/* Exterior Interior */}
      <article className="Exterior-section">
        <p className="brand-heading">{exteriorheading}</p>
        <Exterior />
      </article>
      <hr />
      {/* Performance */}
      <article className="Performance-section">
        <p className="brand-heading">{performanceheading}</p>
        <Performance />
      </article>
      <hr />
      {/* Design */}
      <article className="Design-section">
        <p className="brand-heading">{designheading}</p>
        <Design />
      </article>
      <hr />
      {/* Gallery */}
      <article className="Gallery-section">
        <p className="brand-heading">{galleryheading}</p>
        <Gallery />
      </article>
      <hr />
    </main>
  );
};

export default Main;
