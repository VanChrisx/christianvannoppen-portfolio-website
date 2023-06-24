import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import ME from "../../assets/my__photo.jpg";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me--image">
            <img
              src={ME}
              alt=""
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small></small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Services</h5>
              <small>something something</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Portfolio</h5>
              <small>something something</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde enim
            ab molestiae deserunt laborum. Perferendis consequuntur cum voluptas
            minima tempora facilis blanditiis atque iste ratione, aspernatur
            laborum autem officiis iusto.
          </p>
          <a
            href="#contact"
            className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
