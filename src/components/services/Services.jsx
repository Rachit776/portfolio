import React, { useState } from 'react'
import './services.css'
const Services = () => {
    const[toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Web <br />Development</h3>
                    </div>
                <span className="services__button" onClick={() => toggleTab(1)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Web Development</h3>
                        <p className="services__modal-description">A passionate web developer dedicated to building responsive, efficient, and user-friendly web applications using modern technologies.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Built and deployed complete web applications using frontend and backend technologies.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Ensured seamless user experiences across devices and browsers using HTML5, CSS3, and responsive frameworks.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Proficient in JavaScript and familiar with frameworks like React.js or Node.js to build interactive and scalable solutions.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Experienced in fetching and handling data from RESTful APIs to create dynamic web content.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Skilled in using Git/GitHub for version control and deploying web applications on platforms like Netlify, Vercel, or Heroku.</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Frontend <br/ >Development</h3>
                    </div>
                <span className="services__button" onClick={() => toggleTab(2)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Frontend Development</h3>
                        <p className="services__modal-description">A passionate frontend developer focused on crafting responsive, user-friendly web interfaces using modern technologies.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Skilled in creating mobile-first, responsive layouts using HTML, CSS, and frameworks like Bootstrap or Tailwind CSS.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Proficient in using JavaScript for dynamic functionality, including DOM manipulation, API integration, and event handling.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Proficient in using JavaScript for dynamic functionality, including DOM manipulation, API integration, and event handling.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Focused on delivering clean, user-friendly interfaces with attention to accessibility, consistency, and usability.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Comfortable using Git and GitHub for version control, code collaboration, and project management in team environments.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Software<br/ >Developer</h3>
                    </div>
                <span className="services__button" onClick={() => toggleTab(3)} >View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Software Development</h3>
                        <p className="services__modal-description">A passionate software developer focused on building efficient, scalable, and reliable software solutions using modern tools and technologies.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Strong foundation in data structures and algorithms to develop optimized and effective software solutions.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Proficient in OOP principles and applying them in C++ for modular and maintainable code.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Familiar with agile methodologies, version control, testing, and deployment practices across the full software lifecycle.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Experience in backend development and working with databases like MySQL or MongoDB for robust data handling.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Exposure to building applications that run across different platforms and environments, including desktop, web, and mobile.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>    
    </section>
  )
}

export default Services