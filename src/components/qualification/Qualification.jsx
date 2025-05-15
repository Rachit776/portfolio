import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">


      <div className="qualification__container container">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
          
        </div>

        <div className="qualification__sections">
          {/* EDUCATION */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Web Design */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">CSE - B.Tech</h3>
                <span className="qualification__subtitle">JIIT 128, Noida</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2025, Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
              <div />
            </div>

            {/* Web Development */}
            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
              <div>
                <h3 className="qualification__title">Senior Secondary</h3>
                <span className="qualification__subtitle">KVS, Bokaro</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020
                </div>
              </div>
            </div>

            {/* UX Expert */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Secondary</h3>
                <span className="qualification__subtitle">KVS, Bokaro</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder" />
              </div>
              <div />
            </div>
          </div>

          {/* EXPERIENCE */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Product Designer */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">-</h3>
                <span className="qualification__subtitle">-</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>-
                </div>
              </div>
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
              <div />
            </div>

            {/* UX Designer */}
            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
              <div>
                <h3 className="qualification__title">Full-Stack Developer</h3>
                <span className="qualification__subtitle">Webstack Academy, Remote</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>Jul 2024 - Sep 2024
                </div>
              </div>
            </div>

            {/* Web Designer */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Zidio Development, Remote</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>Jan 2024 - Mar 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder" />
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
