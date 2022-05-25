import React from "react";

const InfoCard = ({ info }) => {
  const { icon, title, details, customBackground } = info;
  console.log(info.title);
  return (
    <div class={`card card-side bg-primary shadow-xl ${customBackground} p-3`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default InfoCard;
