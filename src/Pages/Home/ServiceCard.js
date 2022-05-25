import React from "react";

const ServiceCard = ({ serviceInfo }) => {
  const { name, img, details } = serviceInfo;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl p-3">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title"> {name} </h2>
        <p> {details} </p>
      </div>
    </div>
  );
};

export default ServiceCard;
