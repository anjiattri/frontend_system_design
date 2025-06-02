import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();
  const dotClass = onlineStatus ? "🟢" : "🔴";
  const { loggedInUser } = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img style={{ width: "8rem" }} src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status :{dotClass}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart({cart.length} items)</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              setIsLoggedIn((prevState) => !prevState);
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
