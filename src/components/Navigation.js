import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <h1>Khenichil Youcef</h1>
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            <li>Acceuil</li>
          </NavLink>

          <NavLink
            to="/galery"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            <li>Galerie</li>
          </NavLink>

          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            <li>À Propos</li>
          </NavLink>

          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
