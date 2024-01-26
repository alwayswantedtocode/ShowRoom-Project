import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../Global Conext/GlobalContext";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const SubMenu = () => {
  const {
    openSubMenu,
    closeSubMenu,
    page: { Links },
  } = useGlobalContext();

  const dropdownRef = useRef();

  // Click outside the Submenu to close
  const handleClickOutside = (event) => {
    if (!dropdownRef.current.contains(event.target)) {
      closeSubMenu();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll greater than zero to close Submenu
  const handleScroll = () => {
    if (openSubMenu && dropdownRef.current && window.scrollY > 0) {
      closeSubMenu();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openSubMenu, closeSubMenu]);

  // Scroll to the top when the sub-menu is opened
  // useEffect(() => {
  //   if () {
  //     window.scrollTo(0, 0);
  //   }
  // }, []);

  const clickLink = () => {
    closeSubMenu();
  };

  return (
    <div
      className="subMenu mouseover"
      ref={dropdownRef}
      onClick={(e) => e.stopPropagation()}
    >
      {Links.map((Link, firstIndex) => {
        const { names, path } = Link;
        return (
          <div className="brandContainer mouseover" key={firstIndex}>
            <h3>{names}</h3>

            <div className="brand-image-container">
              {Link.subLinks.map((subLink, secondIndex) => {
                const { image, Description, url } = subLink;
                return (
                  <NavLink
                    className="brand-image"
                    key={secondIndex}
                    to={url}
                    onClick={clickLink}
                  >
                    <img src={image} alt={Description} className="image" />
                    <p>{Description}</p>
                  </NavLink>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubMenu;
