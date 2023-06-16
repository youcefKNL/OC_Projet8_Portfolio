// Galery.js
import React, { useContext } from "react";
import { DataContext } from "../components/DataContext";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

const Galery = () => {
  const { data } = useContext(DataContext);

  return (
    <section className="galery">
      <h1>Mes réalisations & Projets finis</h1>
      {data.map((data) => {
        return <Card data={data} key={data.id} />;
      })}
    </section>
  );
};

export default Galery;
