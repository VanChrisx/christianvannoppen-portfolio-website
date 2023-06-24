import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/my__photo.jpg";

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
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((portfolio) => {
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
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
