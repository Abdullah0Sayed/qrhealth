import { useEffect } from "react";
import i18n from "../../i18n";
import Cookies from "js-cookie";

export default function useLanguageDetection() {
  const handleDocumentDirection = (lang) => {
    window.document.dir = i18n.dir(lang);
  };
  /* When App Load -> Change App Direction */
  useEffect(() => {
    window.document.dir = i18n.dir();
    console.log(`App Direction is ${i18n.dir()}`);
    i18n.on("languageChanged", handleDocumentDirection);

    return () => i18n.off("languageChanged", handleDocumentDirection);
  }, []);

  /* When App Load -> Set App Language Based on Cookies */
  useEffect(() => {
    const cookiesLang = Cookies.get("lang");
    if (cookiesLang) {
      i18n.changeLanguage(cookiesLang);
      console.log(`App Language is ${cookiesLang}`);
    }
  }, []);
}
