import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

import Shimmer from "./Shimmer";

export default RestaurentMenu = () => {

  const { resId } = useParams();

  const restaurentDetails = useRestaurentMenu(resId)

  if (Object.keys(restaurentDetails).length === 0) {
    return <Shimmer />; // change this shimmer to something else
  }
  return (
    <div className="menu">
      <h1>{restaurentDetails?.restaurentName}</h1>
      <h1>{restaurentDetails?.menu}</h1>
    </div>
  );
};
