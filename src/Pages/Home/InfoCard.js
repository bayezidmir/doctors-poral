import React from "react";

const InfoCard = ({ info }) => {
  const { icon, title, details, customBackground } = info;
  return (
    <div
      className={`card card-side bg-primary shadow-xl ${customBackground} p-3`}
    >
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default InfoCard;
