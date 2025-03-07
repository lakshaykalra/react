import React from "react";
import ReactDOM from "react-dom";

// Header Component - logo, items
// Body Component - restaurent cards (image, restaurent name, rating, cousine), big component
// Footer Component - links, big component

const data = [
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/120805201B.png",
    name: "KFC",
    rating: 3.8,
    cousine: "Asian, Mughlai",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/120805201B.png",
    name: "Noor biriyani",
    rating: 4,
    cousine: "Biryani",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/120805201B.png",
    name: "Meghana Foods",
    rating: 4.9,
    cousine: "Chinese",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/120805201B.png",
    name: "MacDonalds",
    rating: 3,
    cousine: "Fast Food",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/120805201B.png",
    name: "Shyam Dhaba",
    rating: 3.8,
    cousine: "North India",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/120805201B.png",
    name: "Gopals",
    rating: 3.8,
    cousine: "Sweets",
  },
];

const HeaderComponent = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
        alt="Swiggy Logo"
      />
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

const RestaurentCardComponent = (props) => {
  const { name, rating, cousine, image } = props.data;
  return (
    <div className="res-card-component">
      <div className="logo">
        <img className="logo1" src={image}></img>
      </div>
      <div className="res-info">
        <div>{name}</div>
        <div>{rating}</div>
        <div>{cousine}</div>
      </div>
    </div>
  );
};

const BodyComponent = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="rest-cards">
      {data.map((element, index) => (
        <RestaurentCardComponent key={index} data={element} />
      ))}
    </div>
  </div>
);

const AppComonent = () => (
  <div className="AppComponent">
    <HeaderComponent />
    <BodyComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComonent />);
