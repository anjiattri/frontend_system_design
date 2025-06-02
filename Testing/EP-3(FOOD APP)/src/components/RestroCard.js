import React from "react";
import { CDN_URL } from "../utils/constants";

function RestroCard(props) {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  const { deliveryTime } = sla;

  // console.log(resData);
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg m-2"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
}

// higher order restro card
// input=>restro card,    ouput->restro card non veg
export const withNonVegLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-600 text-white rounded-lg m-2 p-2">
          NON VEG
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};
export default RestroCard;
