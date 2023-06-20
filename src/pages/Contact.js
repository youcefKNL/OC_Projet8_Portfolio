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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer les données au serveur Node.js avec Nodemailer
    fetch("https://backportfolio-n0e8.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Afficher la réponse du serveur (facultatif)
        // Réinitialiser le formulaire
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
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
        <i class="fa-regular fa-hand-point-down"></i>
      </div>
    </div>
  );
};

export default Contact;
