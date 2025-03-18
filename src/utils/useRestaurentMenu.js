import { useEffect, useState } from "react";

export default useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(async () => {
    const data = await fetch(
      `https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`,
      {
        headers: {
          "x-cors-api-key": "temp_3c6e8d3a98dcbfa1343adeefa422b7d9",
        },
      }
    );

    let menu = await data.json()

    console.log('<<<<<<<restaurent menu data>>>>>', menu)


    menu = menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((element => element.card.card["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ))



    setResInfo({restaurentName:"Pizza Hut", menu});
  }, []);

  return resInfo;
};
