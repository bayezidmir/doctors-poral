import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import ServiceCard from "./ServiceCard";
import PrimaryButton from "../Shared/PrimaryButton";

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

      <div className="hero  mt-12">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">
              Customized treatment based on your requirement
            </h1>
            <p className="py-6">
              We care care about hour client's wellbeing, thus, list your wants
              and let us know so that we can help you the most
            </p>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
