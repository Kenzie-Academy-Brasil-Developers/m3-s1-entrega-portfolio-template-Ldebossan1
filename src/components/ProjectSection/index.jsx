import { projects } from "../../data/projects";
import gitIMG from "../../assets/git-icon.png";

export const ProjectSection = () => {
  return (
      <div className="ProjectsSection">
        <h2 className="title2">Projetos</h2>
        <ul className="ProjectsList">
          {projects.map((project) => {
            return (
              <li className="ProjectsCard" key={project.name}>
                <h3 className="ProjectTitle">{project.name}</h3>
                <span className="ProjectDescription">{project.description}</span>
                <a className="ProjectLink" href="#">Saiba mais</a>
                <img src={gitIMG} alt="GitIcon" />
              </li>
            );
          })}
        </ul>
      </div>
  );
  {
  }
};
