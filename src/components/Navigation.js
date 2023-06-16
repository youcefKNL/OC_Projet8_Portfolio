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
            title="Home"
          >
            <li>
              <p>Acceuil</p> <i className="fa-solid fa-house"></i>
            </li>
          </NavLink>

          <NavLink
            to="/galery"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
            title="Gallery"
          >
            <li>
              <p>Galerie</p> <i className="fa-solid fa-image"></i>
            </li>
          </NavLink>

          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
            title="About"
          >
            <li>
              <p>À Propos</p> <i className="fa-solid fa-circle-info"></i>
            </li>
          </NavLink>

          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
            title="Contact me"
          >
            <li>
              <p>Contact</p> <i className="fa-solid fa-address-card"></i>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
