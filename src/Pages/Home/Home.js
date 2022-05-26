import React from "react";
import Banner from "../Home/Banner";
import Info from "../Home/Info";
import Services from "../Home/Services";
import MyAppointment from "./MyAppointment";
import Contact from "./Contact";
import Footer from "../Shared/Footer";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MyAppointment />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
