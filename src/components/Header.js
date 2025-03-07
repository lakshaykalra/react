import { APP_LOGO } from "../utils/constants";

export default HeaderComponent = () => (
  <div className="header">
    <div className="logo-container">
      <img className="logo" src={APP_LOGO} alt="Swiggy Logo" />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
