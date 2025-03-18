import { APP_LOGO } from "../utils/constants";

import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";

export default HeaderComponent = () => {
  const [buttonNameReact, setButtonNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const userContext = useContext(UserContext)

  return (
    <div className="header">
      <div className="flex-wrap">
        <img className="w-50" src={APP_LOGO} alt="Swiggy Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? "online" : "offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="button"
            onClick={() => {
              buttonName = buttonNameReact === "Login" ? "Logout" : "Login";
              setButtonNameReact(buttonName);
            }}
          >
            {buttonNameReact}
          </button>
          <li>{userContext.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
