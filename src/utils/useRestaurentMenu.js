import { useEffect, useState } from "react";

export default useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(async () => {
    const data = await fetch(
      `https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`,
      {
        headers: {
          "x-cors-api-key": "temp_3c6e8d3a98dcbfa1343adeefa422b7d9",
        },
      }
    );

    setResInfo({ restaurentName: "Pizza Hut", menu: "Burger" });
  }, []);

  return resInfo;
};
