import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { CDN_URL } from "../utils/constants";

function ItemList({ data }) {
  const dispatch = useDispatch();
  const handleClick = (name) => {
    //dispatch action
    dispatch(addItem(name));
    // console.log("name", name);
  };
  return (
    <div>
      <div>
        {data.map((item) => {
          return (
            <div
              key={item.card.info.id}
              data-testid="foodItems"
              className="p-2 m-2  border-black border-b-4 text-left flex justify-between"
            >
              <div className="w-6/12">
                <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span> - ₹{item.card.info.price / 100}</span>
                </div>
                <div>
                  <p className="text-xs">{item.card.info.description}</p>
                </div>
              </div>
              <div className="w-3/12">
                <div className="absolute">
                  <button
                    className="p-2 bg-black text-white shadow-lg rounded-lg mx-20"
                    onClick={() => handleClick(item)}
                  >
                    Add +
                  </button>
                </div>
                <img
                  className="rounded-lg m-2"
                  width="150px"
                  alt="dish"
                  src={CDN_URL + item.card.info.imageId}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
