import React from "react";
import { data } from "../staticData/data";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const ContenentPage = () => {
  const { continents } = data;
  return (
    <>
      <div>
        <h1 className=" font-bold text-center p-3 text-4xl  ">
          Welcome to Trip Advisor
        </h1>
      </div>
      <div className="flex justify-around   ">
        {continents.map((item) => (
          <Link to={`/countries/${item.name}`}>
            <Card {...item} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ContenentPage;
