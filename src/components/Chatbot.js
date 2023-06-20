// new file called DogPicture.jsx
import avatarImage from "../assets/photoPortfolio/profile-portfolio.png"; // Importez votre image de profil
const DogPicture = () => {
  return (
    <div>
      <img src={avatarImage} alt="a dog" />
    </div>
  );
};

export default DogPicture;
