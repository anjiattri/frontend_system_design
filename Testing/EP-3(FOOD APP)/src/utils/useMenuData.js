import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useMenuData = (resId) => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API}&restaurantId=${resId}`);
    const json = await data.json();
    setMenuData(json);
  };
  return menuData;
};

export default useMenuData;
