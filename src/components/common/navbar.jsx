import React, { useState } from "react";
import "../../css/navbar.css";
// import Icon from "src/assets/images/Icon.png";
import logo from "../../assets/images/mainLogo.png";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      {/* <a href="#" className="nav__brand">
        {Icon}
      </a> */}
      <img src={logo} alt="Card" className="logo_image" />
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={active}>
        <li className="nav__item">
          <a href="/user/dashboard" className="nav__link">
            Dashboard
          </a>
        </li>

        <li className="nav__item">
          <a href="/user/view-securities/all" className="nav__link">
            Securities
          </a>
        </li>
        <li className="nav__item">
          <a
            href="/user/view-trades
          "
            className="nav__link"
          >
            Trades
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
