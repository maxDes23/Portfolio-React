import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <a href="./index.html" className="logo">
              <strong>Freelancer</strong> portfolio
            </a>
            <button className="dark-mode-btn">
              <img
                src="./img/icons/sun.svg"
                alt="Light mode"
                className="dark-mode-btn__icon"
              />
              <img
                src="./img/icons/moon.svg"
                alt="Dark mode"
                className="dark-mode-btn__icon"
              />
            </button>

            <ul className="nav-list">
              <li className="nav-list__item">
                <a
                  href="./index.html"
                  className="nav-list__link nav-list__link--active"
                >
                  Projects
                </a>
              </li>
              <li className="nav-list__item">
                <a href="./skills.html" className="nav-list__link">
                  Skills
                </a>
              </li>
              <li className="nav-list__item">
                <a href="./contacts.html" className="nav-list__link">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              {" "}
              Hi, my name is <em>Max</em>
            </strong>
            <br />a frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          <a href="#!" className="btn">
            Download CV
          </a>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <a href="./project-paje.html">
                <img
                  src="./img/projects/01.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Gaming streaming portal</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project-paje.html">
                <img
                  src="./img/projects/02.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Video service</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project-paje.html">
                <img
                  src="./img/projects/03.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Video portal</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project-paje.html">
                <img
                  src="./img/projects/04.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Dating app</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project-paje.html">
                <img
                  src="./img/projects/05.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Landing</h3>
              </a>
            </li>

            <li className="project">
              <a href="./project-paje.html">
                <img
                  src="./img/projects/06.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Gaming community</h3>
              </a>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/u_facebook-f.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/instagram.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/twitter.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/gitHub.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/linkedIn.svg" alt="Link" />
                </a>
              </li>
            </ul>

            <div className="copyright">
              <p>© 2022 frontend-dev.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;