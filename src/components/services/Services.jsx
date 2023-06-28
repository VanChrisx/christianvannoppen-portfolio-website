import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>Qué tengo para ofrecer</h5>
      <h2>Servicios</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Diseño de interfaz de usuario y menu de navegación</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integracion de contenido multimedia en websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implementacion de diseño responsive</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Diseño componetizado</p>
            </li>
          </ul>
        </article>
        {/* QA Analyst */}
        <article className="service">
          <div className="service__head">
            <h3>QA Analyst</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Tasking y Time Tracking.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Analisis de funcionalidad de la historia de usuario en el modelo
                BDD.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Diseño de Test Suites, ejecucion y reporte de Test Cases.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Bug y Defect reports, respetando el Bug Life Cycle.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Seguimiento de bugs, Bug Triage y Bugs Re-Testing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Regression Testing en cada Deployment.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
