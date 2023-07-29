import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { ALL_RESTRO } from "../utils/constants";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(ALL_RESTRO);
    const json = await data.json();
    console.log(json);
    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(listOfRestaurants);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestro(filteredList);
            }}
          >
            search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestro(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestro?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`restroInfo/${restaurant.info.id}`}
          >
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
