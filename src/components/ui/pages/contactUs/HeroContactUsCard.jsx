import React from "react";
import { Link } from "react-router-dom";

const HeroContactUsCard = ({ cardTitle, url, cardData, CardIcon }) => {
  return (
    <Link
      className={`contact-hero-card h-48 p-8 grow rounded-md text-white overflow-hidden bg-footer-color relative flex flex-col gap-4 items-center justify-center`}
      to={url}
      target="_blank"
    >
      <div
        className={`position-box transition-all duration-300 ease-in-out absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-28 h-28 rounded-full bg-gray-100/10`}
      ></div>
      <CardIcon className={`text-5xl`} />
      <div
        className={`flex flex-col gap-2 items-center justify-center text-white`}
      >
        <span className={`text-xl`}>{cardTitle}</span>
        <span dir="ltr">{cardData}</span>
      </div>
    </Link>
  );
};

export default HeroContactUsCard;
