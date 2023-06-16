import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../components/DataContext";

const GaleryShow = () => {
  const { id } = useParams();
  const { data } = useContext(DataContext);

  // Filtrer les données pour trouver la donnée correspondante à l'ID
  const selectedData = data.find((item) => item.id === id);

  if (!selectedData) {
    return <div>Aucune donnée trouvée pour cet ID.</div>;
  }

  return (
    <section className="projectShow">
      <div className="leftContains">
        <h2>
          <span>Site : </span>
          {selectedData.id}
        </h2>
        <h3>
          <span>Technologie :</span> {selectedData.title}
        </h3>
        <p>
          <span>Mission :</span> <br /> {selectedData.mission}
        </p>
        <p>
          <span> Skill développée : </span>
          <br /> {selectedData.skill}
        </p>
        <p>
          <span>Lien : </span>
          <br />
          <ul>
            <li>
              <i className="fa-brands fa-square-github"></i>{" "}
              <a href={selectedData.github}> Code Github </a>
            </li>
            <li>
              <i class="fa-brands fa-internet-explorer"></i>
              {""}
              <a href={selectedData.siteUrl}> Site web </a>
            </li>
            <li>
              <i class="fa-brands fa-readme"></i>{" "}
              <a href={selectedData.moreInfo}> Readme </a>
            </li>
          </ul>
        </p>
      </div>
      <div className="rightContains">
        <figcaption>
          <img src={selectedData.picture} alt={selectedData.id} />
        </figcaption>
      </div>
    </section>
  );
};

export default GaleryShow;
