import { useEffect, useState } from "react";
import { RESTRAUNT_API } from "./constants";

const useRestrauntData = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTRAUNT_API);
    const json = await data.json();
    const resList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestraunts(resList);
    return listOfRestraunts;
  };
};
export default useRestrauntData;
