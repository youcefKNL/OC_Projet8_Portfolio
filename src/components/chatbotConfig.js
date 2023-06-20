import { createChatBotMessage } from "react-chatbot-kit";
import avatarImage from "../assets/photoPortfolio/profile-portfolio.png"; // Importez votre image de profil
import DogPicture from "../components/Chatbot";

const config = {
  botName: `Youcef [Bot]`,
  initialMessages: [
    createChatBotMessage("Posez moi des question sur mon parcours "),
  ],
  customStyles: {
    // botMessageBox: {
    //   backgroundColor: "#376B7E", // Couleur d'arrière-plan de la boîte de message du chatbot
    // },
    chatButton: {
      backgroundColor: "#376B7E", // Couleur de fond du bouton de chat
    },
    // userBubble: {
    //   backgroundColor: "#FF5F45", // Couleur d'arrière-plan de la bulle de l'utilisateur
    // },
    botAvatar: {
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      backgroundImage: `url(${avatarImage})`, // Définissez votre image de profil comme arrière-plan de l'avatar
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
  },
  commands: [
    {
      command: /c[oô]mp[éeè]t[éeè]nc[eè]s?/,
      callback: (state, props) => {
        props.actionProvider.showSkills();
      },
    },
    {
      command: /exp[éeè]ri[éeè]nc[éeè]s?/,
      callback: (state, props) => {
        props.actionProvider.showExperience();
      },
    },
    {
      command: /f[oô]rm[aa]ti[oô]ns?/,
      callback: (state, props) => {
        props.actionProvider.showEducation();
      },
    },
  ],
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;
