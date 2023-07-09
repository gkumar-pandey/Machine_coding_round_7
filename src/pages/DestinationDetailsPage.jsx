import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../staticData/data";

const DestinationDetailsPage = () => {
  const { countryName, continentName, destinationName } = useParams();
  const { continents } = data;
  const { countries } = continents.find((item) => item.name === continentName);
  const { destinations } = countries.find((item) => item.name === countryName);
  const {
    id,
    name,
    description,
    image,
    ratings,
    reviews,
    location,
    openingHours,
    ticketPrice,
    website
  } = destinations.find((item) => item.name === destinationName);

  return (
    <div className=" p-5 ">
      <div className=" text-center text-3xl p-4 font-bold ">
        <h1>{destinationName}</h1>
      </div>
      <div className=" flex justify-center gap-4 ">
        <div className=" w-[400px] h-[300px]  ">
          <img src={image} alt={name} className=" h-full w-full rounded " />
        </div>
        <div>
          <div className=" text-lg font-semibold ">
            <span className=" text-blue-400 ">Name : </span>
            <span>{name}</span>
          </div>
          <div className=" text-lg font-semibold ">
            <span className=" text-blue-400 ">Description : </span>
            <span>{description}</span>
          </div>{" "}
          <div className=" text-lg font-semibold ">
            <span className=" text-blue-400 ">Rating : </span>
            <span>{ratings}</span>
          </div>{" "}
          <div className=" text-lg font-semibold ">
            <span className=" text-blue-400 ">Reviews : </span>
            <span>{reviews}</span>
          </div>{" "}
          <div className=" text-lg font-semibold ">
            <span className=" text-blue-400 ">Location : </span>
            <span>{location}</span>
          </div>{" "}
          <div className=" text-lg font-semibold ">
            <span className=" text-blue-400 ">Opening Hours : </span>
            <span>{openingHours}</span>
          </div>{" "}
          <div className=" text-lg font-semibold ">
            <span className=" text-blue-400 ">Ticket Price : </span>
            <span>{ticketPrice}</span>
          </div>
          <div className=" text-lg font-semibold ">
            <Link to={website}>
              <span className=" text-blue-400 ">Website</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
