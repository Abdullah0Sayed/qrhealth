import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaPhoneFlip } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { CgClose, CgMenu } from "react-icons/cg";
import { AppLinks } from "../../utils/AppLinks";
import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import { setWebLang } from "../../toolkit/features/lang/languageSlice";

const Header = () => {
  const { t } = useTranslation("global");
  const lang = useSelector((state) => state.webLanguage);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  // Header Scroll
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 1);
  };

  const swipeLang = (lang) => {
    dispatch(setWebLang(lang));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // منع الاسكرول وقت فتح السايدبار
  useEffect(() => {
    document.body.style.overflow = isOpenSideBar ? "hidden" : "auto";
  }, [isOpenSideBar]);

  return (
    <>
      {/* Header */}
      <div
        className={`w-full flex flex-col flex-1 transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 z-50 bg-white shadow-md animate-slideDown"
            : "relative"
        }`}
      >
        {/* TopBar */}
        {!isScrolled && (
          <div
            className={`w-full hidden lg:flex flex-row flex-wrap flex-1 px-10 justify-between items-center p-2 bg-header-topBar-color border-b-gray-200 border-b`}
          >
            {/* Contact */}
            <div className={`flex flex-row gap-4 items-center`}>
              <Link
                to={`mailto:info@qrhealth.sa`}
                target="_blank"
                className={`text-header-icon-color`}
              >
                <p className={`flex items-center gap-1 text-sm font-medium`}>
                  <IoMdMail />
                  <span className={`text-text-main-color font-normal`}>
                    info@qrhealth.sa
                  </span>
                </p>
              </Link>

              <Link
                to={`tel:6658914556`}
                target="_blank"
                className={`text-header-icon-color`}
              >
                <p className={`flex items-center gap-1 text-sm font-medium`}>
                  <FaPhoneFlip />
                  <span className={`text-text-main-color font-normal`}>
                    6658914556
                  </span>
                </p>
              </Link>
            </div>

            {/* Social */}
            <div className={`flex flex-row gap-2 items-center`}>
              <Link
                to={`https://www.linkedin.com/company/qrhealth/`}
                target="_blank"
                className={`p-1 hover:bg-primary-color/40 rounded-full flex items-center justify-center`}
              >
                <FaLinkedin className={`text-fifth-color`} />
              </Link>
              <Link
                to={`https://www.instagram.com/qrhealth/`}
                target="_blank"
                className={`p-1 hover:bg-primary-color/40 rounded-full flex items-center justify-center`}
              >
                <FaInstagram className={`text-fifth-color`} />
              </Link>
            </div>
          </div>
        )}

        {/* NavBar */}
        <Container className={`bg-white`}>
          <div
            className={`w-full transition-all duration-200 ease-in-out py-2 flex flex-row justify-between items-center`}
          >
            {/* Logo */}
            <Link
              className={`w-16 h-16 flex items-center justify-center`}
              to={`/`}
            >
              <img
                src={`/uploads/qrLogo.png`}
                alt={`qr-health-logo`}
                className={`object-contain w-full h-full`}
              />
            </Link>

            {/* Links */}
            <div
              className={`hidden lg:flex flex-row items-center justify-center gap-6`}
            >
              {AppLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  end
                  className={({ isActive }) =>
                    `${isActive ? "text-fifth-color font-medium" : ""} text-black text-sm hover:border hover:border-fifth-color hover:text-fifth-color hover:p-1 hover:rounded transition-all duration-200`
                  }
                >
                  {t(link.title)}
                </NavLink>
              ))}

              {/* Lang */}
              {lang === "ar" ? (
                <span
                  className={`flex flex-row items-center gap-2 text-sm cursor-pointer`}
                  onClick={() => swipeLang("en")}
                >
                  <img src={`/uploads/en.svg`} className={`w-4`} />
                  {t("global.langs.en")}
                </span>
              ) : (
                <span
                  className={`flex flex-row items-center gap-2 text-sm cursor-pointer`}
                  onClick={() => swipeLang("ar")}
                >
                  <img src={`/uploads/ar.svg`} className={`w-4`} />
                  {t("global.langs.ar")}
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className={`hidden lg:flex flex-row gap-2 items-center`}>
              <Link
                to={`https://sso.qrhealth.sa/ar/doctor/login`}
                target="_blank"
                className={`bg-linear-to-r rounded-2xl text-sm font-normal from-from-main-grad-color to-to-main-second-color px-3 py-1.5 text-white`}
              >
                {t("navbar.btns.doctor_login")}
              </Link>

              <Link
                to={`https://sso.qrhealth.sa/ar/admin/login`}
                target="_blank"
                className={`rounded-2xl text-sm font-medium bg-btn-color px-3 py-1.5 text-white`}
              >
                {t("navbar.btns.doctor_register")}
              </Link>
            </div>

            {/* Mobile */}
            <div className={`lg:hidden flex flex-row gap-2 items-center`}>
              {/* Lang */}
              {lang === "ar" ? (
                <span
                  className={`flex flex-row items-center gap-2 text-sm cursor-pointer`}
                  onClick={() => swipeLang("en")}
                >
                  <img src={`/uploads/en.svg`} className={`w-4`} />
                  {t("global.langs.en")}
                </span>
              ) : (
                <span
                  className={`flex flex-row items-center gap-2 text-sm cursor-pointer`}
                  onClick={() => swipeLang("ar")}
                >
                  <img src={`/uploads/ar.svg`} className={`w-4`} />
                  {t("global.langs.ar")}
                </span>
              )}

              {/* Burger */}
              <div
                className={`w-8 h-8 flex items-center justify-center cursor-pointer`}
                onClick={() => setIsOpenSideBar(true)}
              >
                <CgMenu />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Sidebar */}
      {isOpenSideBar && (
        <div
          className={`fixed inset-0 bg-black/80 z-[999]`}
          onClick={() => setIsOpenSideBar(false)}
        >
          <div
            className={`absolute ${
              lang === "en" ? "right-0" : "left-0"
            } h-full bg-[#15558d] flex flex-col gap-4 z-[1000] w-72 transition-all duration-500`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <div className={`w-full flex justify-end items-center p-2`}>
              <div
                className={`text-white cursor-pointer`}
                onClick={() => setIsOpenSideBar(false)}
              >
                <CgClose />
              </div>
            </div>

            {/* Links */}
            <div className={`flex flex-col`}>
              {AppLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  end
                  onClick={() => setIsOpenSideBar(false)}
                  className={({ isActive }) =>
                    `${isActive ? "bg-[#06aed4]" : ""} text-white px-5 py-4 border-b border-[#06aed4]`
                  }
                >
                  {t(link.title)}
                </NavLink>
              ))}
            </div>

            {/* Buttons */}
            <div className={`mt-auto p-4 flex flex-col gap-2`}>
              <Link
                to={`https://sso.qrhealth.sa/ar/doctor/login`}
                target="_blank"
                className={`text-center bg-linear-to-r rounded-2xl text-sm from-from-main-grad-color to-to-main-second-color px-3 py-2 text-white`}
              >
                {t("navbar.btns.doctor_login")}
              </Link>

              <Link
                to={`https://sso.qrhealth.sa/ar/admin/login`}
                target="_blank"
                className={`text-center rounded-2xl text-sm bg-btn-color px-3 py-2 text-white`}
              >
                {t("navbar.btns.doctor_register")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
