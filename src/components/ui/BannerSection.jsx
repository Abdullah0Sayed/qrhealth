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
}) => {
  return (
    <div
      className={`w-full flex flex-col gap-4 items-center justify-center h-96 ${enableBannerBgColor ? "bg-fifth-color" : customBgBannerColor}`}
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
