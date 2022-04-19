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

      </div>

      <section id="textAboutMe">
        <div className="container">
          <h2 className="textAboutMe">About Me</h2>
          <p>Text about me</p>
        </div>
      </section>

      <section id="showProjects">
        <div className="container">
          <h2>Projects</h2>

          <div className="allProjects"></div>
        </div>
      </section>



      <section id="contactInformation">
        <div className="container">

          <h2>Contact</h2>
        </div>
      </section>
    </div >
  );
}

export default App;
