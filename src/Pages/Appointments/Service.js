import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Service = ({ serviceInfo }) => {
  const { name, slots } = serviceInfo;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class="text-xl font-bold">{name}</h2>
        <p>
          {slots?.length > 1 ? (
            <>{slots.length} slots</>
          ) : (
            <>{slots?.length} slot</>
          )}{" "}
          available
        </p>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slots Available</span>
          )}{" "}
        </p>
        <div class="card-actions justify-center">
          <button
            disabled={slots.length < 1}
            class="btn bg-gradient-to-r from-neutral to-primary text-white"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
