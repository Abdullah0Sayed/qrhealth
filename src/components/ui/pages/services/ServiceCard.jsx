import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const DESCRIPTION_CLIP_THRESHOLD = 150;

const ServiceCard = ({ serviceTitle, description, serviceImagePath }) => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation("global");

  const isLong = description && description.length > DESCRIPTION_CLIP_THRESHOLD;

  return (
    <div
      className={`service-card h-full w-full flex flex-col border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out`}
    >
      <div className={`card-image h-48 w-full overflow-hidden flex-shrink-0`}>
        <img
          src={serviceImagePath}
          alt={serviceTitle ? `${serviceTitle} service` : `service image`}
          loading="lazy"
          className={`object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105`}
        />
      </div>

      <div className={`flex flex-col justify-between gap-2 p-4 flex-1`}>
        <div className={`flex flex-col gap-2`}>
          {serviceTitle && (
            <p
              className={`card-service-title text-black text-xl font-semibold leading-snug`}
            >
              {serviceTitle}
            </p>
          )}

          {description && (
            <p
              className={`card-service-description text-xs text-gray-600 text-justify leading-relaxed overflow-hidden transition-all duration-500 ease-in-out ${!expanded && isLong ? `line-clamp-1` : ``}`}
            >
              {description}
            </p>
          )}
        </div>

        {isLong && (
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className={`self-start cursor-pointer mt-1 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded`}
          >
            {expanded ? t("global.read_less") : t("global.read_more")}
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
