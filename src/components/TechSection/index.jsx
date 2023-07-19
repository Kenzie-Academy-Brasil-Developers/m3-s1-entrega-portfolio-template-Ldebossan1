import styles from "./styles/TechSection.module.css"
import "../../styles/App.css"
import { RenderTechs } from "./TechList";


export const TechSection = () => {
  return (
    <section className="container">
      <div className={styles.TechSection}>
        <h2 className="title2">Tecnologias</h2>
        <RenderTechs/>
      </div>
    </section>
  );
};
