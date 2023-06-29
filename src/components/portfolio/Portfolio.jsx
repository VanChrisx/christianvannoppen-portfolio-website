import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/du0sum3lj/image/upload/v1687562838/My%20portfolio/TheFightingGameCorner_nscmdd.png",
    title: "The Fighting Game Corner",
    github: "https://github.com/VanChrisx/The-Fighting-Game-Corner",
    demo: "https://vanchrisx.github.io/The-Fighting-Game-Corner/",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/du0sum3lj/image/upload/v1687562956/My%20portfolio/ClinicTurnsImage_jmvau0.png",
    title: "Gestor de turnos",
    github: "https://github.com/VanChrisx/Gestor-de-turnos",
    demo: "https://vanchrisx.github.io/Gestor-de-turnos/",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/du0sum3lj/image/upload/v1687625971/My%20portfolio/AplicarWebSite_rvljue.png",
    title: "Aplicar Website",
    github: "",
    demo: "https://staging.aplicar.com.ar",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/du0sum3lj/image/upload/v1687970962/My%20portfolio/Ecommerce-fightingSticks_p278zs.png",
    title: "Ecommerce Fightings Sticks",
    github: "https://github.com/VanChrisx/Ecommerce-FightingSticks",
    demo: "https://vanchrisx.github.io/Ecommerce-FightingSticks/",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/du0sum3lj/image/upload/v1688000435/My%20portfolio/Digimon-search_wfhicr.png",
    title: "Digimon-Search",
    github: "https://github.com/VanChrisx/digimon-search-app",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Proyectos</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((portfolio) => {
          if (portfolio.github === "") {
            return (
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img
                    src={portfolio.image}
                    alt=""
                  />
                </div>
                <h3>{portfolio.title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={portfolio.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer">
                    Ver Proyecto
                  </a>
                </div>
              </article>
            );
          } else {
            return (
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img
                    src={portfolio.image}
                    alt=""
                  />
                </div>
                <h3>{portfolio.title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={portfolio.github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer">
                    GitHub
                  </a>
                  <a
                    href={portfolio.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer">
                    Ver Proyecto
                  </a>
                </div>
              </article>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Portfolio;
