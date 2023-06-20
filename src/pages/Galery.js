import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../components/DataContext";
import Card from "../components/Card";
import { RotatingLines } from "react-loader-spinner";

const Galery = () => {
  const { data } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data.length > 0) {
      setIsLoading(false);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="spinner-container">
        {/* <TailSpin color="#5c29e9" height={300} width={300} /> */}
        <RotatingLines
          strokeColor="#8B0000"
          strokeWidth="5"
          animationDuration="0.75"
          width="300"
          visible={true}
        />
      </div>
    );
  }

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
