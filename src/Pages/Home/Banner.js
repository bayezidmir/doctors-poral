import React from "react";
import Chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={Chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold">Get Your teeth fixed and Smile!</h1>
          <p class="py-6">
            We are offering half of the regular price for the inauguration of
            our new branch. What are you waiting for. Get the service we offer
            with utmost care.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
