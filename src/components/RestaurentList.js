import { useState, useEffect } from "react";

import Restaurent , {restaurantWithPromotedLabel} from "./Restaurent";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus'

export default RestaurentListComponent = () => {
  const [listRest, setListRest] = useState([]);
  const [listRestCopy, setListRestCopy] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const Component = restaurantWithPromotedLabel(Restaurent)



  useEffect(async () => {
    console.log("<<<<<<<<<<use effect called");
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.210994&lng=74.9454745&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "x-cors-api-key": "temp_3c6e8d3a98dcbfa1343adeefa422b7d9",
        },
      }
    );

    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

        console.log('restuarent', restaurants)

        restaurants[0].info['promoted'] = true

    setListRest(restaurants);
    setListRestCopy(restaurants);
  }, []);

  const onlineStatus = useOnlineStatus()

  if(!onlineStatus) return <h1>You are offline</h1>

  return listRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <input
          type="text"
          placeholder="Enter text..."
          //  value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button
          onClick={() => {
            const data = listRestCopy.filter(
              (element) => element.info.name === inputValue
            );
            setListRest(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter"
          onClick={() => {
            const filter = listRest.filter(
              (element) => Number(element?.info?.avgRating) > 4.2
            );
            setListRest(filter);
          }}
        >
          filter
        </button>
      </div>
      <div className="rest-cards">
        {listRest.map((element, index) => (
          // <Link key={element.info.id} to={"/restaurents/" + element.info.id}>
          //   <Restaurent data={element.info} />
          // </Link>
          <Component data={element.info} key={element.info.id} />
        ))}
      </div>
    </div>
  );
};
