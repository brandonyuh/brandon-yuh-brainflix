import "./Header.scss";
import Logo from "../../assets/images/BrainFlix-logo.svg";
import ProfileIcon from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__img" src={Logo} alt="BrainFlix Logo" />
      </div>
      <div className="header__search">
        <input className="header__input" type="search" placeholder="Search" />
      </div>
      <div className="header__profile">
        <img className="header__icon" src={ProfileIcon} alt="BrainFlix Logo" />
      </div>
      <button className="header__upload">Upload</button>
    </header>
  );
}

export default Header;
