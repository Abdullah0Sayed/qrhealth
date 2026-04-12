import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFoundResource = () => {
  const { t } = useTranslation("global");
  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center`}
    >
      {/* Code */}
      <p className={`text-8xl md:text-9xl font-black text-primary-color`}>
        404
      </p>

      {/* Title */}
      <h2
        className={`mt-4 text-2xl md:text-3xl font-bold text-text-main-color`}
      >
        {t("global.page_not_found")}
      </h2>

      {/* Description */}
      <p className={`mt-2 text-sm md:text-base text-gray-500 max-w-md`}></p>

      {/* Buttons */}
      <div
        className={`mt-6 flex flex-row flex-wrap gap-3 items-center justify-center`}
      >
        {/* Home */}
        <Link
          to={`/`}
          className={`px-5 py-2 rounded-2xl bg-primary-color text-white text-sm hover:opacity-90 transition`}
        >
          {t("global.back_to_home")}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundResource;
