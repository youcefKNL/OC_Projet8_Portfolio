class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    if (message.toLowerCase().includes("qui")) {
      this.actionProvider.whoAreYou();
    } else if (message.toLowerCase().includes("compétences")) {
      this.actionProvider.showSkills();
    } else if (message.toLowerCase().includes("expérience")) {
      this.actionProvider.showExperience();
    } else if (message.toLowerCase().includes("formation")) {
      this.actionProvider.showEducation();
    } else {
      this.actionProvider.defaultResponse();
    }
  }
}

export default MessageParser;
