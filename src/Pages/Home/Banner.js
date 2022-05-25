import React from "react";
import Chair from "../../assets/images/chair.png";
import Background from "../../assets/images/bg.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen px-12"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">
            Get Your teeth fixed and Smile!
          </h1>
          <p className="py-6">
            We are offering half of the regular price for the inauguration of
            our new branch. What are you waiting for. Get the service we offer
            with utmost care.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
