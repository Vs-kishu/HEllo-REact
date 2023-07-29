import { useEffect, useState } from "react";
import { ALL_RESTRO } from "./constants";

const useGetAllRestro = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  useEffect(() => {
    fetchAllRestro();
  }, []);

  const fetchAllRestro = async () => {
    const data = await fetch(ALL_RESTRO);
    const json = await data.json();
    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return { listOfRestaurants, filteredRestro, setFilteredRestro };
};

export default useGetAllRestro;
