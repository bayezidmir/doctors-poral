import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn bg-gradient-to-r from-neutral to-primary text-white font-bold">
      {children}
    </button>
  );
};

export default PrimaryButton;
