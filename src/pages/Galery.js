// // Galery.js
// import React, { useContext } from "react";
// import { DataContext } from "../components/DataContext";
// import Card from "../components/Card";

// const Galery = () => {
//   const { data } = useContext(DataContext);

//   return (
//     <section className="galery">
//       <h1>Mes réalisations & Projets finis</h1>
//       {data.map((data) => {
//         return <Card data={data} key={data.id} />;
//       })}
//     </section>
//   );
// };

// export default Galery;

import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../components/DataContext";
import Card from "../components/Card";
import { TailSpin } from "react-loader-spinner";

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
        <TailSpin color="#000" height={80} width={80} />
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
