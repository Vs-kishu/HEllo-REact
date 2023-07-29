import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setName] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="aboutus">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="contactus">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            type="button"
            onClick={() => {
              btnName === "login" ? setName("logout") : setName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
