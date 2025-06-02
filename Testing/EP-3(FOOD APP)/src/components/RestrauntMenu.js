import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useMenuData from "./../utils/useMenuData";
import RestroCategory from "./RestroCategory";
import Shimmer from "./Shimmer";
function RestrauntMenu() {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  //custom hook
  const menuData = useMenuData(resId);

  if (menuData?.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    menuData?.data?.cards?.[2]?.card?.card?.info;

  const category =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (ele) => {
        return (
          ele?.card?.card["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // console.log("category", category);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}- {costForTwoMessage}
      </p>
      {category?.map((ele, index) => {
        //controlled component
        return (
          <RestroCategory
            key={index}
            data={ele.card.card}
            showItems={index == showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
}

export default RestrauntMenu;
