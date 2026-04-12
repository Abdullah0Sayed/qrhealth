import React from "react";

const ServiceCard = ({ serviceTitle, serviceImagePath }) => {
  return (
    <div
      className={`service-card w-full transition-all duration-1000 ease-linear border border-gray-100 flex flex-col items-center gap-4 p-4`}
    >
      <div className={`card-image overflow-hidden w-full`}>
        <img
          src={serviceImagePath}
          alt={`service-image`}
          className={`object-cover w-full h-full transition-all duration-300 ease-in-out`}
        />
      </div>
      <p className={`card-service-title text-black text-xl`}>{serviceTitle}</p>
    </div>
  );
};

export default ServiceCard;
