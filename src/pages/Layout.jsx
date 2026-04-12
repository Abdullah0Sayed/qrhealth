import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Container from "../components/ui/Container";
import { useScrollToTop } from "../hooks/scrollToTop/useScrollToTop";
import MotionContainer from "../components/ui/MotionContainer";
import { AnimatePresence } from "framer-motion";

const Layout = () => {
  useScrollToTop();
  const location = useLocation();
  return (
    <div className={`flex flex-col min-h-screen`}>
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className={`flex-1 mb-4`}>
        <AnimatePresence mode="wait">
          <MotionContainer key={location.pathname}>
            <Outlet />
          </MotionContainer>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
