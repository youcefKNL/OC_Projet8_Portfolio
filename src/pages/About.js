import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="leftcontaint">
          <h2>MES COMPETENCES</h2>
          <br />
          <ul>
            <li>Sécurité transmission informatique et phonique (VHF)</li>
            <li>Adaptation travail en équipe ou solo</li>
            <li>Construire un site web responsive et dynamique </li>
            <li>Créer des API et des bases de données </li>
            <li>
              Optimiser les performances et réaliser la maintenance de sites web
              déjà existants
            </li>
            <li>Gérer un projet web de A à Z avec la méhodologie Agile</li>
          </ul>
          <br />

          <h2>Mon expérience</h2>
          <br />
          <ul>
            <li>
              <span>2016-2022:</span> Conducteur de Métro
            </li>
            <li>
              <span>2010-2016:</span> Conducteur de Bus
            </li>
            <li>
              <span>2005-2010:</span> Engagé au sein de l'Armée de Terre 35 R.I.
            </li>
            <ul className="listInList">
              <li>2 ans Tireur de précision</li>
              <li>6 mois Radio-Tireur</li>
              <li>3 ans Radio-transmission (option graphie)</li>
            </ul>
          </ul>
          <br />

          <h2>Ma formation</h2>
          <br />

          <ul>
            <li>
              <span>2023:</span> Titre RNCP Développeur Web auprès
              d'OpenClassRooms
            </li>
            <li>
              <span>2016:</span> Formation sécurité ferroviaire
            </li>
            <li>
              <span>2010:</span> Formation Transport de voyageurs
            </li>
            <li>
              <span>2007:</span> Formation Transmission et Sécurisation des
              données
            </li>
            <li>
              <span>2007:</span> Formation Radio Tireur & Chef d'équipe
            </li>
            <li>
              <span>2005:</span> Formation Tireur Précision
            </li>
            <li>
              <span>2005:</span> 1ère année BTS Compta à l'École Nationale de
              Commerce
            </li>
            <li>
              <span>2004:</span> Bac STT Gestion (Mention)
            </li>
          </ul>
        </div>
        <div className="rightcontaint">
          <div className="d3viewSkill">
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
            <span style={{ "--i": 4 }}></span>
            <span style={{ "--i": 5 }}></span>
            <span style={{ "--i": 6 }}></span>
            <span style={{ "--i": 7 }}></span>
            <span style={{ "--i": 8 }}></span>
          </div>
          <div className="fixViewSkill">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
