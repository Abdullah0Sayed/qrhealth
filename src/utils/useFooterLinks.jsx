import { MdWhatsapp } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

import { Link, useParams } from "react-router-dom";
import { FaAppStore, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import useSetting from "../hooks/setting/useSetting";
import { useEffect } from "react";
import useSpecializations from "../hooks/specializations/useSpecializations";
import { FaGooglePay } from "react-icons/fa";

export default function useFooterLinks() {
  const { t } = useTranslation("global");
  const { lang } = useParams();
  const { information, loading, error } = useSetting();
  const { specializations, specializationLoading } = useSpecializations();
  useEffect(() => {
    if (!specializationLoading) {
      console.log(specializations);
    }
  }, [specializationLoading, specializations]);
  const FooterLinks = [
    {
      title: "footer.links.company.title",
      children: [
        {
          path: {
            en: "about-us",
            ar: "about-us",
          },
          title: "footer.links.company.about_us",
        },
        {
          path: {
            en: "contact-us",
            ar: "contact-us",
          },
          title: "footer.links.company.contact_us",
        },
        {
          path: {
            en: "blogs",
            ar: "blogs",
          },
          title: "footer.links.company.blogs",
        },
      ],
    },
    {
      title: "footer.links.services.title",
      children:
        !specializationLoading && specializations?.length
          ? specializations.map((specialize) => {
              const translation =
                specialize?.translations?.find((e) => e.locale === lang) ||
                specialize?.translations?.[0];

              return {
                title: translation?.title || "",
              };
            })
          : [],
    },
    {
      title: "footer.links.legal.title",
      children: [
        {
          path: {
            en: "terms-of-use",
            ar: "terms-of-use",
          },
          title: "footer.links.legal.terms_of_use",
        },
        {
          path: {
            en: "privacy-policy",
            ar: "privacy-policy",
          },
          title: "footer.links.legal.privacy_policy",
        },
      ],
    },
    {
      title: "footer.links.request_our_services.title",
      children: [
        {
          content: (
            <div className={`flex flex-col gap-2`}>
              {/* <span className={`text-white font-bol`}>
                {t("footer.links.request_our_services.download_app")}
              </span> */}
              <div className={`flex flex-row gap-2 items-center`}>
                <Link
                  className={`flex justify-center items-center text-base  w-8 h-8 rounded-full bg-white text-btn-color hover:text-fourth-color transition-all duration-200`}
                  to={`https://play.google.com/store/apps/details?id=com.qrdigitalhealth.qrdigitalhealth&pcampaignid=web_share`}
                  target="_blank"
                >
                  <FaGooglePay />
                </Link>
                <Link
                  className={`flex justify-center items-center text-base  w-8 h-8 rounded-full bg-white text-btn-color hover:text-fourth-color transition-all duration-200`}
                  to={`https://apps.apple.com/sa/app/qr-digital-health/id6754563872`}
                  target="_blank"
                >
                  <FaAppStore />
                </Link>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "footer.links.contact_us.title",
      children: [
        {
          content: (
            <Link
              className={`flex flex-row gap-2 items-center text-base text-white hover:text-fourth-color transition-all duration-200`}
              to={`https://wa.me/${information?.phone}`}
              target="_blank"
            >
              <MdWhatsapp />
              <span className={``} dir="ltr">
                {loading ? "" : information?.phone}
              </span>
            </Link>
          ),
        },
        {
          content: (
            <Link
              className={`flex flex-row gap-2 items-center text-base text-white hover:text-fourth-color transition-all duration-200`}
              to={`mailto:${information?.email}`}
              target="_blank"
            >
              <IoMailOutline />
              <span className={``}>{loading ? "" : information?.email}</span>
            </Link>
          ),
        },
      ],
    },
    {
      title: "footer.links.follow_us.title",
      children: [
        {
          content: (
            <div className={`flex flex-row gap-2 items-center`}>
              <Link
                className={`flex justify-center items-center text-base  w-8 h-8 rounded-full bg-white text-btn-color hover:text-fourth-color transition-all duration-200`}
                to={information?.linkedIn}
                target="_blank"
              >
                <FaLinkedin />
              </Link>
              <Link
                className={`flex justify-center items-center text-base  w-8 h-8 rounded-full bg-white text-btn-color hover:text-fourth-color transition-all duration-200`}
                to={information?.instagram}
                target="_blank"
              >
                <FaInstagram />
              </Link>
            </div>
          ),
        },
      ],
    },
  ];

  return {
    FooterLinks,
  };
}
