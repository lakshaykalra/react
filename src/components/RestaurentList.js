import Restaurent from "./Restaurent";

import { useState } from "react";

import data from "../utils/mock";

export default RestaurentListComponent = () => {

    const [listRest, setListRest] = useState(data)

 return ( <div className="body">
    <div className="filter">
      <button className="filter" onClick={() => {
        const filter = data.filter(element => Number(element.rating) > 4)
        setListRest(filter)
      }}>
        filter
      </button>
    </div>
    <div className="rest-cards">
      {listRest.map((element, index) => (
        <Restaurent key={index} data={element} />
      ))}
    </div>
  </div>
)};
