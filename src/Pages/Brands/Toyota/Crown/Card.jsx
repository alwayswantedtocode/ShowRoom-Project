import React from "react";
import CarCard from "../../../../Images/LEXUS/ES/large-2__1_-removebg-preview.png";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <article className="Card-Tag-container">
      <div className="Card-Tag">
        <div className="Tag-Info">
          <div className="Car-Year-Type ">
            <span className="release-year">2023</span>
            <div className="line"></div>
            <span className="Car-Brand">Toyota</span>
          </div>
          <div className="Car-Name">
            <h2>Crown</h2>
            <p>$25,999</p>
          </div>
        </div>
        <div className="Card-image">
          <img src={CarCard} alt="" />
        </div>
        <div className="Retail-Btn-Container">
          <NavLink>
            <button className="Retail-Btn">Find a Retailer</button>
          </NavLink>
        </div>
      </div>
    </article>
  );
};

export default Card;
