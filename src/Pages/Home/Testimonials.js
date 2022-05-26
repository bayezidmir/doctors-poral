import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import quote from "../../assets/icons/quote.svg";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="my-20">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-primary">Testimonials</h1>
          <p className="text-3xl text-accent">What Our Patients Says</p>
        </div>
        <div>
          <img src={quote} alt="" className="w-24 lg:w-48" />
        </div>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
