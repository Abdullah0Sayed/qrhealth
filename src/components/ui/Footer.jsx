import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { FooterLinks } from "../../utils/FooterLinks";
import Container from "./Container";

const Footer = () => {
  const { t } = useTranslation("global");
  const { lang } = useParams();
  return (
    <div
      id={`footer`}
      className={`w-full
        flex flex-col bg-footer-color
    `}
    >
      {/* Links */}
      <Container>
        <div
          className={`w-full flex flex-row flex-wrap space-x-20 space-y-10 bg-footer-color py-8`}
        >
          {FooterLinks.map((footerLinkGroup, index) => (
            <div className={`flex flex-col gap-2 `} key={index}>
              <p className={`text-xl  text-[#C2CCD0]`}>
                {t(footerLinkGroup.title)}
              </p>
              <div className={`flex flex-col space-y-2`}>
                {footerLinkGroup.children.map((childrenGroup, i) =>
                  childrenGroup.path ? (
                    <Link
                      key={i}
                      to={`/${lang}/${childrenGroup.path[lang]}`}
                      className={`text-white text-base`}
                    >
                      {t(childrenGroup.title)}
                    </Link>
                  ) : childrenGroup.content ? (
                    <div key={i}>{childrenGroup.content}</div>
                  ) : (
                    <span key={i} className={`text-white text-base`}>
                      {t(childrenGroup.title)}
                    </span>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <hr className={`w-full h-0.5 bg-primary-color`} />
      {/* About QrHealth */}
      <Container>
        <div className={`flex flex-col gap-4 bg-footer-color py-8`}>
          <div className={`logo-container w-40 overflow-hidden`}>
            <img
              src={`/uploads/qrHealthFooterLogo.png`}
              alt={`qr-health-logo`}
              className={`w-full h-full object-cover`}
            />
          </div>
          <p className={`text-white`}>{t("footer.logo_section.description")}</p>
        </div>
      </Container>
      <hr className={`w-full h-0.5 bg-primary-color`} />
      {/* QrHealth Copyrights */}

      <Container>
        <div
          className={`flex flex-row items-center gap-4 bg-footer-color py-8`}
        >
          <p className={`text-white`}>
            {t("footer.copyrights_section.description", {
              year: new Date().getFullYear(),
            })}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
