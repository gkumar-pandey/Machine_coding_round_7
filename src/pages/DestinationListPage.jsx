import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../staticData/data";
import DetailsCard from "../components/DetailsCard";
import Card from "../components/Card";

const DestinationListPage = () => {
  const { countryName, destionationName, continentName } = useParams();
  const { continents } = data;

  const { countries } = continents.find((item) => item.name === continentName);

  const { destinations } = countries.find((item) => item.name === countryName);

  return (
    <div>
      <div></div>
      <div className=" flex justify-center  gap-3 ">
        {destinations.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
};

export default DestinationListPage;
