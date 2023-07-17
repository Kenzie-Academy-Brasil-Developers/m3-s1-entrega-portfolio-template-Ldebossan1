import { user } from "../../data/user";

export const Footer = () => {
  return (
    <>
      <footer>
        <h2>Contato</h2>
        <ul>
          <li>
            <a href="" target="_blank">
              <img src="../../assets/whatsapp-icon.png" alt="WhatsappIcon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lucas-cavalheiro-e-silva-debossan-809423173/"
              target="_blank"
            >
              <img src="../../assets/linkedin-icon.png" alt="LinkedinIcon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Ldebossan1" target="_blank">
              <img src="../../assets/github-icon.png" alt="GitHubIcon" />
            </a>
          </li>
        </ul>
        <p>Todos direitos reservados - {user}</p>
      </footer>
    </>
  );
};
