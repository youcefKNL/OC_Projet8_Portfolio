import React from "react";

const Home = () => {
  //const currentPage = "/";
  return (
    <section className="home">
      <div className="left-contain">
        <figcaption className="imagePic  rollerLeft "></figcaption>
      </div>
      <div className=" right-contain">
        <h2>Développeur FullStack "Agile" spécialisés en JavaScript</h2>
        <p>
          Explorez mon portfolio dynamique et innovant !<br /> Plongez dans
          l'univers fascinant des technologies, où chaque projet est une
          nouvelle aventure. Je suis constamment en quête de connaissances et de
          compétences pour repousser les frontières de la création numérique.
          Explorez mes réalisations, admirez mon savoir-faire et laissez-vous
          inspirer par ma passion débordante. <br /> Que ce soit le
          développement web, les applications mobiles, les solutions innovantes
          ou la sécurisation des serveurs, je suis prêt à relever tous les
          défis. <br /> N'hésitez pas à me contacter pour discuter de vos
          projets et collaborer ensemble vers un avenir technologique prometteur
          !
        </p>
      </div>
    </section>
  );
};

export default Home;
