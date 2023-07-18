import { technologies } from "../../data/technologies";

export const TechSection = () => {
  return (
      <div className="TechSection">
        <h2 className="title2">Tecnologias</h2>
        <ul className="listTech">
          {technologies.map((technology) => {
            return (
              <li className="techCard" key={technology.name}>
                <img src={technology.img} alt={technology.name} />
                <span>{technology.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
  );
};
