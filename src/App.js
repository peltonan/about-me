import './App.css';
import projectOne from './images/feelingsFirstAid.png'
import pictureMe from './images/netteCoding.png'
import logo from './images/logoNette.png'

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

      <section id="textAboutMe">
        <div className="container aboutMeWrapper">
          <h2 className="textAboutMe">About Me</h2>
          <p>I'm a kindergarten teacher in the middle of a career change. I've lived in the Helsinki Metropolitan Area for 12 years studying and working.
            I'm originally from the countryside where you can see farmlands and forests when looking outside the window.</p>

          <p>I've worn many hats in the past and now I'm wearing one saying: Junior Front End Developer. I've started in boot camp in January 2022, learning the basics of <span>HTML</span>, <span>CSS</span> and <span>Javascript</span>.
            In March 2022, I started doing my own projects. I have two mentors who have been in the field for over 10 years, teaching and assisting me. Currently, I'm learning <span>React</span>.</p>

          <p>I'm constantly learning new things and want to get better. I love working on the computer and have a passion for design. I also have skills in video editing, 3D modeling and art. I'm also interested in languages, I'm fluent in: English, Finnish and Swedish.</p>

          <p>In my free time, I like to play video games, create art, spend time interior decorating, watching movies, reading books, walking outside and drinking tea. I also have a soft spot for music and theater.</p>

          <p>In a nutshell: Gamer, artist, designer, introvert, nerd.</p>

        </div>
      </section>

      <section id="showProjects">
        <div className="container">
          <h2>Projects</h2>
          <div className="allProjects">
            <div className="projectOne">
              <div className="projectPicture">
                <a><img src={projectOne} className="imageOne" alt="project"></img></a>

              </div>
              <div className="projectTools">
                <p>HTML - CSS - REACT</p>
              </div>

              <div className="projectDescription">
                <h4>Feelings First Aid</h4>
                <p>A tool giving tips how to improve your mood! Survey with yes/no questions.</p>
              </div>

              <div className="projectLinks">
                <a className="gitHub" href="https://github.com/peltonan/feelings-first-aid">GitHub</a>

              </div>
            </div>
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
