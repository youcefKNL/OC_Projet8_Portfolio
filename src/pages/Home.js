import React from "react";

const Home = () => {
  //const currentPage = "/";
  return (
    <section className="home">
      <div className="left-contain">
        <figcaption className="imagePic  rollerLeft "></figcaption>
      </div>
      <div className=" right-contain">
        <h2>French developers specializing in Fullstack JavaScript</h2>
        <p>
          Explorez mon portfolio dynamique et innovant !<br /> Plongez dans
          l'univers fascinant des technologies, où chaque projet est une
          nouvelle aventure. Je suis constamment en quête de connaissances et de
          compétences pour repousser les frontières de la création numérique.
          Explorez mes réalisations, admirez mon savoir-faire et laissez-vous
          inspirer par ma passion débordante. <br /> Que ce soit le
          développement web, les applications mobiles ou les solutions
          innovantes, je suis prêt à relever tous les défis. <br />{" "}
          Rejoignez-moi dans cette aventure numérique, où les possibilités sont
          infinies et où l'apprentissage est un moteur perpétuel. <br />{" "}
          Ensemble, bâtissons un avenir technologique prometteur !
        </p>
      </div>
    </section>
  );
};

export default Home;
