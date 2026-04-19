import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import i18n from "../../i18n";
import { setWebLang } from "../../toolkit/features/lang/languageSlice";

export const useChangeLanguage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();
  const dispatch = useDispatch();

  const changeLang = (newLang) => {
    // 1. current path without language
    const pathWithoutLang = location.pathname.replace(`/${lang}`, "");

    // 2. fallback to home if empty
    const cleanPath = pathWithoutLang || "";

    // 3. update i18n
    i18n.changeLanguage(newLang);

    // 4. update redux
    dispatch(setWebLang(newLang));

    // 5. navigate to same page but new language
    navigate(`/${newLang}${cleanPath}`, { replace: true });
  };

  return { changeLang };
};
