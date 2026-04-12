import { useTranslation } from "react-i18next";
import "./App.css";
import "./i18n";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import useLanguageDetection from "./hooks/lang/useLanguageDetection";
import { useEffect } from "react";
import i18n from "./i18n";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
function App() {
  const { t } = useTranslation("global");
  const lang = useSelector((state) => state.webLanguage);
  useLanguageDetection();

  useEffect(() => {
    window.document.dir = i18n.dir();
    const handleLanguageChanged = (lang) => {
      window.document.dir = i18n.dir(lang);
    };
    i18n.on("languageChanged", handleLanguageChanged);

    return () => i18n.off("languageChanged", handleLanguageChanged);
  }, []);

  return (
    <>
      <Toaster position={`${lang === "en" ? "top-left" : "top-right"}`} />
      <div className={`font-main-ar`}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
