import React from "react";
import bg from "../../assets/images/bg.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <div
      className="my-20 bg-accent p-5 rounded"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-center">
        <p className="text-primary font-bold">Contact Us</p>
        <p className="text-3xl text-base-100 font-semibold">
          Stay connected with us
        </p>
      </div>
      <form className="text-center mt-8">
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full max-w-lg"
        />{" "}
        <br /> <br />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered w-full max-w-lg"
        />{" "}
        <br /> <br />
        <textarea
          type="text"
          placeholder="Your Message"
          className="input input-bordered w-full max-w-lg h-32 mb-5"
        />{" "}
        <br />
        <PrimaryButton>Submit</PrimaryButton>
      </form>
    </div>
  );
};

export default Contact;
