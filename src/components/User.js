import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";

export default User = (props) => {
  const { name, location, qualification } = props;
  // state variable
  // use effect and state variable changes
  //   const [team, setTeam] = useState([])
  const [count] = useState(0);

  useEffect(()=>{
    console.log('use effect called')
  })

  return (
    <div className="user">
        {console.log("erfre")}
      <h2>count:{count}</h2>
      <h2>Name:{name}</h2>
      <h3>Location:{location}</h3>
      <h4>Qualification:{qualification}</h4>
    </div>
  );

  //   return team.length >0 ?  (
  //     <div className="user">
  //       <h2>Name:{name}</h2>
  //       <h3>Location:{location}</h3>
  //       <h4>Qualification:{qualification}</h4>
  //     </div>
  //   ) : <Shimmer />
};
