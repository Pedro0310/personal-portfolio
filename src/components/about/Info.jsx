import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-laptop about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Years Learning</span>
      </div>

      <div className="about__box">
        <i class="bx bx-code-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">3+ Projects</span>
      </div>

      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Certificates</h3>
        <span className="about__subtitle">+10 certificates</span>
      </div>
    </div>
  );
};

export default Info;
