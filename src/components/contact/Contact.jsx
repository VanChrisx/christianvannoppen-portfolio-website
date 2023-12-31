import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vy8lf1s",
      "template_rd12xjc",
      form.current,
      "WEr_7Li6QwjSa5kQf"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Puedes comunicarte conmigo</h5>
      <h2>Contacto</h2>

      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>christianvannoppen@gmail.com</h5>
            <a
              href="mailto:christianvannoppen@gmail.com"
              target="_blank"
              rel="noreferrer">
              Envíame un mensaje
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__icon" />
            <h4>LinkedIn</h4>
            <h5>Christian Daniel Van Noppen</h5>
            <a
              href="https://www.linkedin.com/in/christian-daniel-van-noppen/"
              target="_blank"
              rel="noreferrer">
              Envíame un mensaje
            </a>
          </article>

          <article className="contact__option">
            <MdOutlineWhatsapp className="contact__icon" />
            <h4>WhatsApp</h4>
            <h5>+1130293376</h5>
            <a
              href="https://wa.me/541130293376"
              target="_blank"
              rel="noreferrer">
              Envíame un mensaje
            </a>
          </article>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre completo"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Déjame tu mensaje"
            required></textarea>
          <button
            type="submit"
            className="btn btn-primary">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
