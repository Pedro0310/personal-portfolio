import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-html5" style={{ color: "#E44D26" }}></i>

            <div>
              <h3 className="skills__name">HTML</h3>
              {/*<span className="skills__level">Basic</span>*/}
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-css3" style={{ color: "#2277FF" }}></i>

            <div>
              <h3 className="skills__name">CSS</h3>
              {/*<span className="skills__level">Advanced</span>*/}
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-javascript" style={{ color: "#e2b900" }}></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              {/*<span className="skills__level">Intermediate</span>*/}
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i
              class="bx bxl-tailwind-css"
              style={{ color: "rgba(0,87,226,0.94)" }}
            ></i>

            <div>
              <h3 className="skills__name">Tailwind</h3>
              {/*<span className="skills__level">Intermediate</span>*/}
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-react" style={{ color: "#61DBFB" }}></i>

            <div>
              <h3 className="skills__name">React</h3>
              {/*<span className="skills__level">Intermediate</span>*/}
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>

            <div>
              <h3 className="skills__name">---</h3>
              {/*<span className="skills__level">---</span>*/}
            </div>
          </div>

          

        </div>
      </div>
    </div>
  );
};

export default Frontend;
