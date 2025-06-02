import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { RESTRAUNT_API } from "./../utils/constants";
import useOnlineStatus from "./../utils/useOnlineStatus";
import RestroCard, { withNonVegLabel } from "./RestroCard";
import Shimmer from "./Shimmer";

function Body() {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  const RestroCardNonVeg = withNonVegLabel(RestroCard);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTRAUNT_API);
      const json = await data.json();
      const resList =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log("resList", resList);
      setListOfRestraunts(resList);
      setFilteredRestraunts(resList);
    } catch (error) {
      // console.log(error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline!Please check your internet connection!</h1>
    );
  }

  return listOfRestraunts?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className=" m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            placeholder="Search"
            className="border border-solid border-black focus:ring-2 focus:ring-blue-500"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className=" px-4 py-2 bg-green-100 m-4 rounded-lg"
            data-testid="searchBtn"
            onClick={() => {
              let filteredList = listOfRestraunts?.filter((ele) => {
                return ele.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestraunts(filteredList);
            }}
          >
            search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="flex px-4 py-2 m-4 bg-gray-100 rounded-lg"
            onClick={() => {
              let filteredList = listOfRestraunts?.filter((ele) => {
                return ele.info.avgRating > 4.2;
              });
              setFilteredRestraunts(filteredList);
            }}
          >
            Top Rated Restraunts
          </button>
        </div>
        <div className=" m-4 p-4 flex items-center">
          <label>UserName: </label>
          <input
            type="text"
            className="border border-solid border-black focus:ring-2 focus:ring-blue-500"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
              // setSearchText(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestraunts?.map((ele) => {
          return (
            <Link to={`/restraunts/${ele.info.id}`} key={ele.info.id}>
              {/* if restro is non veg add a nong veg label to it */}
              {ele?.info?.veg ? (
                <RestroCard resData={ele} />
              ) : (
                <RestroCardNonVeg resData={ele} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
