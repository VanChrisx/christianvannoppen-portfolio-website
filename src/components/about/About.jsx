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
            Hola, soy Christian y disfruto de crear cosas para la web. Comencé
            mi viaje durante la secundaría, dónde mi primer acercamiento a la
            programación fue con Visual Basic 6.0. Durante un tiempo deje en
            segundo plano la programacion para explorar disciplinas artisticas,
            pero nunca me halle en ninguna de ellas. Recientemente me reencontre
            con la programacion de la mano del desarrollo web{" "}
            <strong>Front-End</strong>, viendo tutoriales, y realizando cursos.
            Actualmente estoy buscando un puesto de desarrollador junior para
            finalmente comenzar mi carrera y aprender entre profesionales.
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
