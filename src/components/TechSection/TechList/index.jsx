import styles from "../styles/TechSection.module.css"
import "../../../styles/App.css"
import { technologies } from "../../../data/technologies"


export const RenderTechs = () => {
    return (
        <ul className={styles.listTech}>
          {technologies.map((technology) => {
            return (
              <li className={styles.techCard} key={technology.name}>
                <img src={technology.img} alt={technology.name} />
                <span>{technology.name}</span>
              </li>
            );
          })}
        </ul>
    )
}