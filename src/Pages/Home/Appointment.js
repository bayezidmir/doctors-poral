import React from "react";
import doctor from "../../assets/images/doctor.png";
import PrimaryButton from "../Shared/PrimaryButton";
import bg from "../../assets/images/bg.png";

const Appointment = () => {
  return (
    <section
      className="flex justify-center items-center bg-accent p-10 mt-28"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex-1 hidden  lg:block">
        <img className="mt-[-200px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <p className="text-xl text-primary">Appointment</p>
        <p className="text-3xl text-base-100 my-5">Make an Appointment Today</p>
        <p className="text-base-100 my-5">
          We have around 50 doctors at your service. Do not hesitate to get
          consultancy today.
        </p>
        <PrimaryButton>GET STARTED</PrimaryButton>
      </div>
    </section>
  );
};

export default Appointment;
