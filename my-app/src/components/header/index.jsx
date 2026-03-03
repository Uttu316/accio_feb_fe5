import { Link, NavLink } from "react-router";
import logo from "../../assets/react.svg";
import "./header.css";
const Header = ({ title }) => {
  return (
    <header className="resume_header">
      <div className="resume_title_box">
        <Link to="/">
          <img src={logo} alt="React Logo" />
        </Link>
        <span className="resume_title">{title || "My Portfolio"}</span>
      </div>

      <nav className="resume_links">
        <HeaderLink link="/store" label={"Store"} />
        <HeaderLink link="/about" label={"About"} />
        <HeaderLink link="/contact" label={"Contact"} />
      </nav>
    </header>
  );
};

const HeaderLink = (props) => {
  const { link, label } = props;
  return <NavLink to={link}>{label}</NavLink>;
};
export default Header;
