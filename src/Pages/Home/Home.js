import React from "react";
import Banner from "../Home/Banner";
import Info from "../Home/Info";
import Services from "../Home/Services";
import Appointment from "./Appointment";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <Services />
      <Appointment />
      <Testimonials />
    </div>
  );
};

export default Home;
