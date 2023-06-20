class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  whoAreYou() {
    const message = this.createChatBotMessage(
      "Je suis un chatbot développé par OpenAI."
    );
    this.updateChatbotState(message);
  }

  showSkills() {
    const message = this.createChatBotMessage(
      "Voici mon expérience :\n\n" +
        "• 2005-2010: Engagé au sein de l'Armée de Terre 35 R.I.\n" +
        "   - 2 ans en tant que tireur de précision\n" +
        "   - 6 mois en tant que radio-tireur\n" +
        "   - 3 ans en tant que radio-transmission (option graphie)\n" +
        "• 2010-2016: Conducteur de Bus\n" +
        "• 2016-2022: Conducteur de Métro\n" +
        "• 2022-présent: Reconversion dans le domaine de la programmation"
    );
    this.updateChatbotState(message);
  }

  showExperience() {
    const message = this.createChatBotMessage(
      "Voici mes compétences :\n\n" +
        "• Sécurité (élément d'intervention, patrouille, contrôle de foule, sécurité incendie, etc...)\n" +
        "• Sécurité transmission informatique et phonique (VHF)\n" +
        "• Prise de commandement, encadrement de différentes équipes de 3 à 6 personnes\n" +
        "• Responsable du magasin Transmission à l'échelle de la Compagnie de combat ensuite Régimentaire\n" +
        "• Conduite de véhicules légers et lourds\n" +
        "• Conduite de bus pendant 6 ans\n" +
        "• Conduite de métro pendant 5 ans"
    );

    this.updateChatbotState(message);
  }

  showEducation() {
    const message = this.createChatBotMessage(
      "Voici ma formation académique :\n\n" +
        "• Baccalauréat scientifique\n" +
        "• Formation militaire initiale\n" +
        "• Formation de conducteur de bus\n" +
        "• Formation de conducteur de métro\n" +
        "• Formation en programmation (autodidacte)"
    );
    this.updateChatbotState(message);
  }

  defaultResponse() {
    const message = this.createChatBotMessage(
      "Désolé, je ne peux pas répondre à cette question pour le moment."
    );
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [message], // Remplacer les messages précédents par le nouveau message
    }));
  }
}

export default ActionProvider;
