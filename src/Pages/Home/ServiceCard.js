import React from "react";

const ServiceCard = ({ serviceInfo }) => {
  const { name, img, details } = serviceInfo;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl p-3">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {name} </h2>
        <p> {details} </p>
      </div>
    </div>
  );
};

export default ServiceCard;
