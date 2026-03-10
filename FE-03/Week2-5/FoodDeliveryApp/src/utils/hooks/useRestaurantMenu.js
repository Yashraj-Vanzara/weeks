import { useEffect, useState } from "react";

export  function useRestaurantMenu(id) {

    const[resinfo,setresinfo]=useState(null)
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=${id}`,
    );
    const json = await data.json();
    setresinfo(json.data);

  }
  return resinfo
}
