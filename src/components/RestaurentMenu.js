import { useParams } from "react-router-dom";

import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategories from "./RestaurentCategories.js";

import Shimmer from "./Shimmer";
import { useState } from "react";

export default RestaurentMenu = () => {
  const { resId } = useParams();
  const [showIndex, setIndex] = useState(0);

  const restaurentDetails = useRestaurentMenu(resId);

  if (!restaurentDetails) {
    return <Shimmer />; // change this shimmer to something else
  }
  return (
    <div className="text-center">
      <h1 className="font-bold my-3">{restaurentDetails?.restaurentName}</h1>

      {restaurentDetails?.menu.map((element, index) => (
        <RestaurentCategories
          menu={element}
          setIndex={() => setIndex(index)}
          showItems={index === showIndex ? true : false}
        />
      ))}
    </div>
  );
};
