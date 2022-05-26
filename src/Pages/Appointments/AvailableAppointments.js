import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <div>
      <p className="text-xl text-neutral text-center font-bold">
        Available Appointment on: {format(date, "PP")}
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
        {services.map((service) => (
          <Service key={service._id} serviceInfo={service} />
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
