import React from "react";

const Card = ({ image, name }) => {
  return (
    <div>
      <div className=" w-[200px] h-[200px] relative   rounded ">
        <img src={image} className=" w-full h-full rounded " alt={name} />
        <p className=" absolute left-3 bottom-0 text-lg font-bold ">{name}</p>
      </div>
    </div>
  );
};

export default Card;
