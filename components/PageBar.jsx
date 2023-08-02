import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/pagesBar.css";

function PagesBar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const handleNavbarToggle = () => {
    setExpandNavbar((prev) => !prev);
  };

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton" onClick={handleNavbarToggle}>
        <div className="toggleIcon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/formation">Formation</Link>
        <Link to="/project">Projects</Link>
        <div className="dropdown">
          <Link >Contact</Link>
          <div className="dropdown-content">
            <Link to="/listeContact">Liste Contacts</Link>
            <Link to="/contact">Contactez-moi</Link>
          </div>
        </div>
      
        
        <div className="dropdown">
          <Link >Temoignage</Link>
          <div className="dropdown-content">
            <Link to="/listeTemoignage">Liste des témoignages</Link>
            <Link to="/formTemoignage">Laisser un témoignage</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagesBar;
