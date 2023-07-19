import styles from "../styles/ProjectSection.module.css"
import { projects } from "../../../data/projects";
import gitIMG from "../../../assets/git-icon.png";

export const RenderProjects = () => {
    return (
        <ul className={styles.ProjectsList}>
          {projects.map((project) =>{ 
            return (
              <li className={styles.ProjectsCard} key={project.name}>
                <h3 className={styles.ProjectTitle}>{project.name}</h3>
                <span className={styles.ProjectDescription}>
                  {project.description}
                </span>
                <a className={styles.ProjectLink} href="#">
                  Saiba mais
                </a>
                <img src={gitIMG} alt="GitIcon" />
              </li>
            );
          })}
        </ul>
    )
}