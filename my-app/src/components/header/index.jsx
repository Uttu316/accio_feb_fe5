import logo from "../../assets/react.svg";
import "./header.css";
const Header = () => {
  return (
    <header className="resume_header">
      <div className="resume_title_box">
        <img src={logo} alt="React Logo" />
        <span className="resume_title">My Portfolio</span>
      </div>

      <nav className="resume_links">
        <a href="#">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Project</a>
      </nav>
    </header>
  );
};
export default Header;
