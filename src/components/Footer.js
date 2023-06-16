import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="listSocialIcon">
        <ul className="socialIcons">
          <li>
            <a
              href="https://linkedin.com/in/youcef-knl"
              className="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>

          <li>
            <a
              href="https://api.whatsapp.com/send?phone=33601312152"
              className="whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/youcefKNL"
              className="github"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <i className="fa-regular fa-copyright"></i> 2023 - Tous droits réservés.
        KHENICHIL.
      </div>
    </footer>
  );
};

export default Footer;
