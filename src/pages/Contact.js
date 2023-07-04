import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoyer les données au serveur Node.js avec Nodemailer
      const response = await fetch(
        "https://clever-pear-centipede.cyclic.app/contact" ||
          "http://localhost:4000/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa("cyclic:Cyclic+91")}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data); // Afficher la réponse du serveur (facultatif)

      // Réinitialiser le formulaire
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur:", error);
      if (
        error.message ===
        "JSON.parse: unexpected character at line 1 column 1 of the JSON data"
      ) {
        alert(
          "Le serveur a renvoyé une erreur de syntaxe JSON. Veuillez me contacter via d'autres liens."
        );
      } else {
        alert(
          "Une erreur s'est produite lors de l'envoi du formulaire. (Free server)\n\n Veuillez me contacter via d'autres liens."
        );
      }
    }
  };

  return (
    <div className="contact">
      <h2>Contactez-moi !!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </label>
        <button type="submit" className="btn">
          Envoyer
        </button>
      </form>
      <h3>ou sinon contactez moi via mes réseaux</h3>
      <div className="hand">
        <i className="fa-regular fa-hand-point-down"></i>
      </div>
    </div>
  );
};

export default Contact;
