import './App.css';
import projectOne from './images/feelingsFirstAid.png';
import pictureMe from './images/netteCoding.png';
import logo from './images/logoNette.png';
import { projects } from './allProjects';
import ProjectCard from './components/ProjectCard';
import AboutMe from './components/AboutMe';

function App() {
  //Smooth Transition When Clicking Anchor Tags//
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'


      });
    });
  });
  return (

    <div className="App">
      <div className="headerGrid">
        <div className="introPicture">
          <img src={pictureMe} className="pictureMe" alt="hello" />
          <img src={logo} className="logo" alt="hello" />
        </div>
        <section className="intro">
          <div className="nameTitleWrapper">
            <h1 className="myName">Annette<div>Peltonen</div></h1>
            <h2 className="title"><div>Future</div><div>Front End<div>Developer</div></div></h2>
          </div>

          <div className="navigationWrapper">
            <ul>
              <li className="navigation">
                <a href="#textAboutMe">About Me</a>
              </li>

              <li className="navigation">
                <a href="#showProjects">Projects</a>
              </li>

              <li className="navigation">
                <a href="#contactInformation">Contact</a>
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
