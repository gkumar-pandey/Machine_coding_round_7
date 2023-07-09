import React from "react";
import { data } from "../staticData/data";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";

const CountriesPage = () => {
  const { id } = useParams();
  const { continents } = data;

  const { countries } = continents.find((item) => item.name === id);

  return (
    <div>
      <div className=" text-center text-2xl p-4 font-bold ">
        <h2>Top Countries in {id} for your next holiday</h2>
      </div>
      <div className=" grid grid-cols-3  p-5 ">
        {countries.map((item) => (
          <Link to={`/destination/${id}/${item.name}`}>
            <Card {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesPage;
