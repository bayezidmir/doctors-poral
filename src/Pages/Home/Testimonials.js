import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="my-20">
      <div className="mb-10">
        <h1 className="font-bold text-primary">Testimonials</h1>
        <p className="text-3xl text-accent">What Our Patients Says</p>
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
