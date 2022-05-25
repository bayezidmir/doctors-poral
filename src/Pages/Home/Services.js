import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      img: fluoride,
      details: "Improve teeth health and reduce the risk of cavities",
    },
    {
      id: 2,
      name: "Cavity Filling",
      img: cavity,
      details:
        "Restore your teeth to beauty instantly with Cosmetic Dental Filling",
    },
    {
      id: 3,
      name: "Teeth Whitening",
      img: whitening,
      details:
        "With our Teeth Whitening treatment boost your confidence and smile",
    },
  ];
  return (
    <div className="my-12">
      <div className="text-center">
        <p className="text-xl text-primary ">This is service</p>
        <p className="text-4xl text-accent">Services we offer</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
        {services.map((service) => (
          <ServiceCard key={service.id} serviceInfo={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
