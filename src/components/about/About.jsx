import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Conoceme</h5>
      <h2>Acerca De Mi</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <a
              href="https://www.coderhouse.com/certificados/636d19c0ee4508000e1678d3"
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit" }}
              className="about__card-a">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Desarrollo Web</h5>
                <small>CoderHouse</small>
              </article>
            </a>
            <a
              href="https://www.coderhouse.com/certificados/63ee474407f4fc000e087ed9"
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit" }}
              className="about__card-a">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>JavaScript</h5>
                <small>CoderHouse</small>
              </article>
            </a>
            <a
              href="https://www.coderhouse.com/certificados/64384d63c6a73300024cd96d"
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit" }}
              className="about__card-a">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Front-end React</h5>
                <small>CoderHouse</small>
              </article>
            </a>
          </div>
          <p>
            Me encuentro en crecimiento en el desarrollo
            <strong> Front-End </strong>
            buscando constantemente fortalecer mis habilidades. Una de mis
            principales tareas, aparte de brindar un aspecto idóneo a una web,
            es poder potenciar su llegada a más personas, por lo que dedico
            bastante tiempo a optimizar el SEO de un proyecto.
          </p>
          <a
            href="#contact"
            className="btn btn-primary">
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
