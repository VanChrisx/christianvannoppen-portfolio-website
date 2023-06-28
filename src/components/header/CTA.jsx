import React from "react";
import CV from "../../assets/Christianvannoppen_cv.pdf";

const CTA = () => {
  return (
    <div>
      <div className="cta">
        <a
          href={CV}
          download
          className="btn">
          Descargar CV
        </a>
        <a
          href="#contact"
          className="btn btn-primary">
          Contacto
        </a>
      </div>
    </div>
  );
};

export default CTA;
