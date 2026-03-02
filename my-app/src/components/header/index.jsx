import logo from "../../assets/react.svg";
import "./header.css";
const Header = ({ title }) => {
  return (
    <header className="resume_header">
      <div className="resume_title_box">
        <img src={logo} alt="React Logo" />
        <span className="resume_title">{title || "My Portfolio"}</span>
      </div>

      <nav className="resume_links">
        <HeaderLink link="#" label={"Home"} />
        <HeaderLink link="#skills" label={"Skills"} />
        <HeaderLink link="#projects" label={"Projects"} />
      </nav>
    </header>
  );
};

const HeaderLink = (props) => {
  const { link, label } = props;
  return <a href={link}>{label}</a>;
};
export default Header;
