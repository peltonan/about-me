import './App.css';

function App() {
  return (

    <div className="App">

      <div className="headerGrid">
        <div>
        </div>
        <section className="intro">
          <div>
            <h1>Annette Peltonen</h1>
            <h2>Future Front End Developer</h2>
          </div>

          <div>
            <ul>
              <li className="liAboutMe">About Me</li>
              <li className="liProjects">Projects</li>
              <li className="liContact">Contact</li>
            </ul>
          </div>
        </section>

      </div>

      <section className="aboutMe">
        <div className="container">

          <h2>About Me</h2>
          <p>Text about me</p>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <h2>Projects</h2>

          <div className="allProjects"></div>
        </div>
      </section>



      <section className="contact">
        <div className="container">

          <h2>Contact</h2>
        </div>
      </section>
    </div >
  );
}

export default App;
