import React from "react";
import "./portfolio.css";
import Menu from "./Menu";
import { useState } from "react";

const Portfolio = () => {
  const [items] = useState(Menu);

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button">
                <i
                  className="bx bx-link  work__button-icon"
                  style={{ color: "#000" }}
                ></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
