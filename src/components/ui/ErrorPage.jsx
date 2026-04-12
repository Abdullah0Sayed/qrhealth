// src/pages/ErrorPage.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { t } = useTranslation("global");
  const error = useRouteError();
  //   console.error(error);

  const message =
    error?.statusText || error?.message || t("global.error_happen_resource");
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-4 text-center">
      <h1 className="text-5xl font-bold mb-4">😬 Ooops!</h1>
      <p className="text-lg mb-4">{message}</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {t("global.back_to_home")}
      </Link>
    </div>
  );
};

export default ErrorPage;
