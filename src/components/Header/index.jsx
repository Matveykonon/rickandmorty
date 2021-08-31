import SearchInput from "../SearchInput";
import logo from "../../assets/logo.svg";
import "./index.css";

const Header = ({ onSearch }) => (
  <header className="Header">
    <div className="Header-inner">  {/* Guess its better to make it with js */}
      <img src={logo} className="Header-logo" alt="logo" />
      <SearchInput onSearch={onSearch} />
    </div>
  </header>
  
);

export default Header;
