import { NavLink } from "react-router-dom";

import "./projectCart.styled.css";

const ProjectCart = ({ title, img, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project">
        <a href="./project-paje.html">
          <img src={img} alt={title} className="project__img" />
          
          <h3 className="project__title">{title}l</h3>
        </a>
      </li>
    </NavLink>
  );
};

export default ProjectCart;
