import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/images/BrainFlix-logo.svg";
import ProfileIcon from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img className="header__img" src={Logo} alt="BrainFlix Logo" />
      </Link>
      <div className="header__search">
        <input className="header__input" type="search" placeholder="Search" />
      </div>
      <div className="header__profile">
        <img className="header__icon" src={ProfileIcon} alt="BrainFlix Logo" />
      </div>

      <button className="button header__upload">
        <Link to="/upload" className="button--text">
          Upload
        </Link>
      </button>
    </header>
  );
}

export default Header;
