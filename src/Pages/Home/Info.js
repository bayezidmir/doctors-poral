import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  const info = [
    {
      id: 1,
      icon: clock,
      title: "Opening Hours",
      details: "We are open 24/7",
      customBackground: "bg-gradient-to-r from-neutral to-primary",
    },
    {
      id: 2,
      icon: marker,
      title: "Our Location",
      details: "Dhanmondi 9, Dhaka, Bangladesh",
      customBackground: "bg-accent",
    },
    {
      id: 3,
      icon: phone,
      title: "Contact",
      details: "+8801742286919",
      customBackground: "bg-gradient-to-r from-neutral to-primary",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 my-10 text-white ">
      {info.map((i) => (
        <InfoCard key={i.id} info={i} />
      ))}
    </div>
  );
};

export default Info;
