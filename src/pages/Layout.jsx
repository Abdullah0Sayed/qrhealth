import React, { useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Container from "../components/ui/Container";
import { useScrollToTop } from "../hooks/scrollToTop/useScrollToTop";
import MotionContainer from "../components/ui/MotionContainer";
import { AnimatePresence } from "framer-motion";
import i18n from "../i18n";
import OrganizationSchema from "../components/seo/OrganizationSchema";
import WebsiteSchema from "../components/seo/WebsiteSchema";

const Layout = () => {
  useScrollToTop();
  const location = useLocation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return (
    <>
      <WebsiteSchema />
      <OrganizationSchema />

      <div className={`flex flex-col min-h-screen`}>
        <Header />

        <div className={`flex-1 mb-4`}>
          <AnimatePresence mode="wait">
            <MotionContainer key={`${lang}-${location.pathname}`}>
              <Outlet />
            </MotionContainer>
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
