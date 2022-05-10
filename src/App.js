import './App.css';

import pictureMe from './images/netteCoding.png';
import logo from './images/logoNette.png';
import ProjectCard from './components/ProjectCard';
import AboutMe from './components/AboutMe';

import { useEffect } from 'react';
import { projects } from './allProjects';

function App() {

  useEffect(() => {
    document.title = "Annette Peltonen - Front End Portfolio"
  }, []);

  // Smooth scroll to ID //
  const smoothScroll = (event) => {
    event.preventDefault()
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (

    <div className="App">
      <div className="headerGrid">
        <div className="introPicture">
          <img src={pictureMe} className="pictureMe" alt="hello" />
          <img src={logo} className="logo" alt="hello" />
        </div>
        <section className="intro">
          <div className="nameTitleWrapper">
            <h1 className="myName">Annette<span>Peltonen</span></h1>
            <h2 className="title"><span>Future</span><span>Front End<span>Developer</span></span></h2>
          </div>

          <div className="navigationWrapper">
            <ul>
              <li className="navigation">
                <a href="#textAboutMe" onClick={(e) => smoothScroll(e)}>About Me</a>
              </li>

              <li className="navigation">
                <a href="#showProjects" onClick={(e) => smoothScroll(e)}>Projects</a>
              </li>

              <li className="navigation">
                <a href="#contactInformation" onClick={(e) => smoothScroll(e)}>Contact</a>
              </li>
            </ul>
          </div>
        </section>

      </div >
      <AboutMe />

      <section id="showProjects">
        <div className="container">
          <h2>Projects</h2>
          <div className="allProjects">
            {/*  //Map Function for Projects// */}
            {projects.map((projectInformation) => {
              return (
                <ProjectCard projectInformation={projectInformation} />


              )
            })}
          </div>
        </div>
      </section >



      <section id="contactInformation">
        <div className="container">

          <h2 className="contactText">Contact</h2>
          <p>You can find me on <a className="LinkedInLink" href='https://www.linkedin.com/in/annette-peltonen-800988197'>LinkedIn</a></p>

        </div>
      </section>

      <footer></footer>

    </div >

  );
}

export default App;
