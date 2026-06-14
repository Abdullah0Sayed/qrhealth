import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SpecializationCard = ({
  specialize,
  translation,
  id,
  showDetailsBtn = false,
  detailsPath,
}) => {
  const { t } = useTranslation("global");
  return (
    <div
      className={`specialization-card h-full w-full flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-fifth-color transition-all duration-300 ease-in-out p-6`}
    >
      <div
        className={`specialization-icon w-full h-40 rounded-xl flex items-center justify-center overflow-hidden shrink-0`}
      >
        <img
          src={specialize?.image}
          alt={
            translation?.title
              ? `${translation.title} specialization`
              : `specialize-${id}-icon`
          }
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105`}
        />
      </div>

      {translation?.title && (
        <p
          className={`specialization-title text-center text-base font-semibold text-black leading-snug`}
        >
          {translation.title}
        </p>
      )}
      {showDetailsBtn && (
        <div className={`w-full flex`}>
          <Link
            to={detailsPath}
            className={`w-fit cursor-pointer hover:bg-primary-color transition-all duration-150 ease-in hover:text-white px-2 py-1 border border-primary-color text-fifth-color rounded-full`}
          >
            {t("pages.specializations.profile.show_details")}
          </Link>
        </div>
      )}
    </div>
  );
};

export default SpecializationCard;
