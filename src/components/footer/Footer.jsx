import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Pedro</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#work" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/pedro-ruiz-marrero/"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-linkedin" style={{ color: "#0A66C2" }}></i>
          </a>

          <a
            href="https://github.com/Pedro0310"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>          
        </div>

        <span className="footer__copy">
          &#169; Pedro Ruiz. All rights reserved{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
