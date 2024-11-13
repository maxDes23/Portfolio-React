import gitHubIcon from "./gitHub-black.svg";
import "./styled.css";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="blank" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
