import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-nodejs" style={{ color: "#68A063" }}></i>

            <div>
              <h3 className="skills__name">Node.js</h3>
              {/*<span className="skills__level">Basic</span>*/}
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-git" style={{ color: "#F05030" }}></i>

            <div>
              <h3 className="skills__name">Git</h3>
              {/*<span className="skills__level">Basic</span>*/}
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-mongodb" style={{ color: "#1E8835" }}></i>

            <div>
              <h3 className="skills__name">MongoDB</h3>
              {/*<span className="skills__level">Basic</span>*/}
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-firebase" style={{ color: "#F5820B" }}></i>

            <div>
              <h3 className="skills__name">Firebase</h3>
              {/*<span className="skills__level">Basic</span>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
