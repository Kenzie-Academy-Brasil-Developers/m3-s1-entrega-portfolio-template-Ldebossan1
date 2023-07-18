import WhatsappIMG from "../../assets/whatsapp-icon.png";
import linkedinIMG from "../../assets/linkedin-icon.png";
import githubIMG from "../../assets/github-icon.png";

import { user } from "../../data/user";

export const Footer = () => {
  return (
    <>
      <footer>
        <h2 className="title2">Contato</h2>
        <ul>
          <li>
            <a href="#">
              <img src={WhatsappIMG} alt="WhatsappIcon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={linkedinIMG} alt="LinkedinIcon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={githubIMG} alt="GitHubIcon" />
            </a>
          </li>
        </ul>
        <p className="paragraph">Todos direitos reservados - {user}</p>
      </footer>
    </>
  );
};
