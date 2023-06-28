import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  const ME =
    "https://res.cloudinary.com/du0sum3lj/image/upload/v1687627036/My%20portfolio/my__photo_gfj6fz.jpg";
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hola soy</h5>
        <h1>Christian Daniel Van Noppen</h1>
        <h5 className="text-light">Desarrollador Front-end</h5>
        <CTA />

        <div className="me">
          <img
            src={ME}
            alt="me"
          />
        </div>

        <a
          href="#contact"
          className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
