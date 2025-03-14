import { APP_LOGO } from "../utils/constants";

import { useState } from "react";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

export default HeaderComponent = () => {
  const [buttonNameReact, setButtonNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus()

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO} alt="Swiggy Logo" />
      </div>
      <div className="nav-items">
        <ul>
        <li>
            {onlineStatus ? "online" : "offline"}
          </li>
          <li><Link to="/">Home</Link></li>
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
        </ul>
      </div>
    </div>
  );
};
