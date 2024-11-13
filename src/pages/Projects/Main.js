import "./Main.styled.css";

import Header from "./../../components/Header/Header.js";

import ProjectCart from "../../components/ProjectCart/projectCart.js";
import { projects } from "../../components/Helpers/projectsList.js";

const Main = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((project, index) => {
              return <ProjectCart title={project.title} img={project.img} index={index} />;
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Main;
