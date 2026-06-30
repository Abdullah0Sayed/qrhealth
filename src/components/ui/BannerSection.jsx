import React from "react";

const BannerSection = ({
  title,
  description,
  enableBannerBgColor,
  customBgBannerColor = "",
  bannerTitleColor,
  bannerDescriptionColor,
  children,
  bannerTitleSize,
  bannerDescriptionSize,
  customStyle,
}) => {
  return (
    <div
      className={`${customStyle ? "container w-full xl:max-w-7xl rounded-2xl p-4 mx-auto" : ""} w-full my-4 flex flex-col gap-4 items-center justify-center h-80 ${enableBannerBgColor ? "bg-fifth-color" : customBgBannerColor}`}
    >
      <p
        className={`${bannerTitleSize ? bannerTitleSize : "text-3xl"} text-center font-bold ${bannerTitleColor ? bannerTitleColor : "text-white"}`}
      >
        {title}
      </p>
      <p
        className={`${bannerDescriptionSize ? bannerDescriptionSize : "text-base"} text-center ${bannerDescriptionColor ? bannerDescriptionColor : "text-white"}`}
      >
        {description}
      </p>
      {children}
    </div>
  );
};

export default BannerSection;
