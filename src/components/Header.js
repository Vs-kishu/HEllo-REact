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

  const { loggedInUser, setUserName } = useContext(UserContext);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex items-center  px-5 bg-gradient-to-r w-full justify-between from-blue-600">
      <div className="logo-container flex gap-5 items-center">
        <Link to={"/"}>
          {" "}
          <img className="h-[100px] w-[100px]" src={logo} alt="logo" />
        </Link>

        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <span className="fixed bottom-3 z-50 bg-gradient-to-r from-black to-gray-300 text-white rounded-lg border-2 animate-bounce  px-4 font-semibold">
        Online Status: {onlineStatus ? "🟢" : "🔴"}
      </span>
      <div className="max-lg:hidden flex items-center gap-3">
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
