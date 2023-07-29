import React, { useEffect, useState } from "react";
import { RESTRO_INFO_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { json, useParams } from "react-router-dom";

const RestroInfo = () => {
  const { restroId } = useParams();
  const [ResInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const Data = await fetch(RESTRO_INFO_API + restroId);
    const json = await Data.json();
    setResInfo(json.data);
  };
  if (ResInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    ResInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    ResInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{"Rs."} {item.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestroInfo;
