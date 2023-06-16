// Card.js
import React, { useContext, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import logoReact from "../assets/icon/logo192.png";
import booki from "../assets/photoPortfolio/booki-removebg-preview.png";
import { NavLink } from "react-router-dom";
import { DataContext } from "../components/DataContext";

const Card = ({ data }) => {
  const { selectData } = useContext(DataContext);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    if (cards) {
      Array.from(cards).forEach((card) => {
        VanillaTilt.init(card, {
          max: 25,
          speed: 400,
          glare: true,
          "max-glare": 0.5,
        });
      });
    }
  }, []);

  return (
    <div className="card">
      <div className="logo">
        <img src={logoReact} alt="logoReact" className="rotate" />
      </div>

      <div className="content">
        <h2>{data.title}</h2>
        <img src={booki} alt="booki" />

        <NavLink
          to={`/galery/${data.id}`}
          className="project-link"
          onClick={() => selectData(data.id)}
        >
          more
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
