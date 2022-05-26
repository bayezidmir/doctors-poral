import React from "react";

const Testimonial = ({ testimonial }) => {
  const { location, picture, name, review } = testimonial;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl p-3">
      <p>{review.slice(0, 100)}</p>
      <div className="flex my-3 items-center">
        <div className="avatar ">
          <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-3">
            <img src={picture} alt="" />
          </div>
        </div>
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
