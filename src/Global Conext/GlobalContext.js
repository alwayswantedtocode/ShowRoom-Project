import React, { useState, useContext, useEffect } from "react";
import SubMenuLinks from "../NavBar/NavbarData";


const GlobalContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  // const [location, setLocation] = useState({});

  const [page, setPage] = useState({
    names: "",
    Links: [],
  }); //refer to read.me

  // Show more details About peformance and design
  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);

  //Slide Menu
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  //SubMenu dropdown
  const openSubMenu = (text, coordinates) => {
    const names = SubMenuLinks.find((link) => link.page === text);
    setPage(names);
    // setLocation(coordinates);
    setIsSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
    // window.scrollTo(0, 0); // set pageYOffset to zero
  };

// Account dropdown details state
const [showAside, setShowAside] = useState(false);


  return (
    <GlobalContext.Provider
      value={{
        openMobileMenu,
        closeMobileMenu,
        isMobileMenuOpen,
        openSubMenu,
        closeSubMenu,
        isSubMenuOpen,
        // location,
        page,
        showMore,
        setShowMore,
        showMore1,
        setShowMore1,
        showAside,
        setShowAside,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
