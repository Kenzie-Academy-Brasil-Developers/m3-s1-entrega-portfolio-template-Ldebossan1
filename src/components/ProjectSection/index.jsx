import "../../styles/App.css"
import styles from "./styles/ProjectSection.module.css"
import { RenderProjects } from "./ProjecList";


export const ProjectSection = () => {
  return (
    <section className="container">
      <div className={styles.ProjectsSection}>
        <h2 className="title2">Projetos</h2>
        <RenderProjects/>
      </div>
    </section>
  );
};
