/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const handleSetActive = (link) => {};

  return (
    <nav>
      <Scrollspy
        items={["home", "about", "experience", "services", "contact"]}
        currentClassName="active"
        offset={-200}
        onUpdate={handleSetActive}
        className="navbar">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}>
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}>
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}>
          <BiBook />
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}>
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}>
          <BiMessageSquareDetail />
        </a>
      </Scrollspy>
    </nav>
  );
};

export default Nav;
