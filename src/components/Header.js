import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import logo from "../../Public/Foodlogo.svg";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between px-5 bg-gradient-to-r from-blue-600">
      <div className="logo-container">
        <img className="h-20" src={logo} alt="logo" />
      </div>
      <span className="fixed bottom-3 z-50 bg-gradient-to-r from-black to-gray-300 text-white rounded-lg border-2 animate-bounce  px-4 font-semibold">
        Online Status: {onlineStatus ? "🟢" : "🔴"}
      </span>
      <div className="flex items-center gap-3">
        <ul className="flex items-center gap-4  font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="relative font-bold text-3xl ">
            <Link to="/cart" className="flex">
              <RiShoppingCart2Fill />{" "}
              <span className="absolute text-sm px-1 bg-slate-400 rounded-full -right-2 -top-3">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
