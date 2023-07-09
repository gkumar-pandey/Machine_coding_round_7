import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../staticData/data";
import DetailsCard from "../components/DetailsCard";
import Card from "../components/Card";

const DestinationListPage = () => {
  const { countryName, continentName } = useParams();
  const { continents } = data;

  const { countries } = continents.find((item) => item.name === continentName);

  const { destinations } = countries.find((item) => item.name === countryName);

  return (
    <div>
      <div className=" text-center text-2xl font-bold p-3">
        <h1>Top Places in {countryName} for your next holiday </h1>
      </div>
      <div className=" flex justify-center  gap-3 ">
        {destinations.map((item) => (
          <Link
            to={`/destinationDetails/${continentName}/${countryName}/${item.name}`}
          >
            <Card {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DestinationListPage;
