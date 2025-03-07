import React from "react";
import ReactDOM from "react-dom";

import Header from "./src/components/Header";
import RestaurentList from "./src/components/RestaurentList";

const AppComonent = () => (
  <div className="AppComponent">
    <Header />
    <RestaurentList />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComonent />);
