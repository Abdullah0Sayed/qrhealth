import React from "react";
import { useTranslation } from "react-i18next";
import BannerSection from "../components/ui/BannerSection";
import Container from "../components/ui/Container";
import { FaUserDoctor } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";
import { FaRegHospital } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../components/ui/PageTitle";
import HreflangTags from "../components/seo/HreflangTags";

const AboutUs = () => {
  const { t } = useTranslation("global");
  const { lang } = useParams();
  return (
    <div className={`w-full flex flex-col gap-8 `}>
      <PageTitle
        pageName={t("app_name") + " | " + t("pages.about_us.title")}
        metaContentDescription={t("pages.about_us.meta_description")}
      />

      <HreflangTags path="/about-us" lang={lang} />

      <BannerSection
        title={t("pages.about_us.banner.title")}
        description={t("pages.about_us.banner.description")}
        enableBannerBgColor={true}
        customStyle={true}
      />

      {/* Section */}
      <div className={`w-full flex justify-center items-center`}>
        <Container
          className={`flex flex-row flex-wrap justify-between items-start gap-16 p-8`}
        >
          {/* Content */}
          <div className={`flex-1 flex flex-col gap-4 min-w-[300px]`}>
            <p className={`text-fifth-color text-3xl font-black`}>
              {t("pages.about_us.hero_section.title")}
            </p>
            <div className={`flex flex-col gap-4 text-wrap max-w-full`}>
              <span
                className={`text-base font-normal text-black/70 text-justify leading-7`}
              >
                {t("pages.about_us.hero_section.hint1")}
              </span>
              <span
                className={`text-base font-normal text-black/70 text-justify leading-7`}
              >
                {t("pages.about_us.hero_section.hint2")}
              </span>
            </div>
          </div>

          {/* Image */}
          <div className={`flex-1 flex items-center justify-end min-w-[300px]`}>
            <div className={`card-image overflow-hidden w-[32rem] h-[20rem]`}>
              <img
                src={`/uploads/aboutQrHealth.jpg`}
                alt={`about-us-hero-section`}
                className={`w-full h-full object-cover transition-all duration-500 ease-in-out`}
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Cars */}
      <div className={`w-full`}>
        <Container
          className={`w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-center`}
        >
          {/* Value */}
          <div
            className={`about-card transition-all h-48 duration-300 ease-in-out rounded-2xl p-4 max-h-48 bg-white text-fifth-color shadow-md border border-gray-200 hover:border-fifth-color flex flex-col gap-4 flex-1`}
          >
            <div className={`flex flex-row items-center justify-between gap-4`}>
              {/* Title */}
              <span className={`text-4xl font-bold`}>
                {t("pages.about_us.cards.values.title")}
              </span>
              {/* Icon */}
              <FaUserDoctor
                className={`text-5xl transition-all duration-300 ease-in-out`}
                id="icon"
              />
            </div>

            {/* Description */}
            <span className={`text-sm text-justify font-normal`}>
              {t("pages.about_us.cards.values.description")}
            </span>
          </div>
          {/* Vision */}
          <div
            className={`about-card transition-all h-48 duration-300 ease-in-out rounded-2xl p-4 max-h-48 bg-white text-fifth-color shadow-md border border-gray-200 hover:border-fifth-color flex flex-col gap-4 flex-1`}
          >
            <div className={`flex flex-row items-center justify-between gap-4`}>
              {/* Title */}
              <span className={`text-4xl font-bold`}>
                {t("pages.about_us.cards.vision.title")}
              </span>
              {/* Icon */}
              <FaStethoscope
                className={`text-5xl transition-all duration-300 ease-in-out`}
                id="icon"
              />
            </div>

            {/* Description */}
            <span className={`text-sm text-justify font-normal`}>
              {t("pages.about_us.cards.vision.description")}
            </span>
          </div>
          {/* Message */}
          <div
            className={`about-card transition-all h-48 duration-300 ease-in-out rounded-2xl p-4 max-h-48 bg-white text-fifth-color shadow-md border border-gray-200 hover:border-fifth-color flex flex-col gap-4 flex-1`}
          >
            <div className={`flex flex-row items-center justify-between gap-4`}>
              {/* Title */}
              <span className={`text-4xl font-bold`}>
                {t("pages.about_us.cards.message.title")}
              </span>
              {/* Icon */}
              <FaRegHospital
                className={`text-5xl transition-all duration-300 ease-in-out`}
                id="icon"
              />
            </div>

            {/* Description */}
            <span className={`text-sm text-justify font-normal`}>
              {t("pages.about_us.cards.message.description")}
            </span>
          </div>
        </Container>
      </div>

      <div className={`w-full bg-header-topBar-color`}>
        <Container>
          <BannerSection
            title={t("global.download_qr_health_app_today.title")}
            description={t("global.download_qr_health_app_today.description")}
            bannerTitleColor={"text-fifth-color"}
            bannerDescriptionColor={"text-third-color"}
          >
            <div
              className={`flex flex-row flex-wrap shrink items-center justify-center gap-4 mt-4`}
            >
              <Link
                className={`overflow-hidden w-48`}
                to={
                  "https://play.google.com/store/apps/details?id=com.qrdigitalhealth.qrdigitalhealth&pcampaignid=web_share"
                }
                target="_blank"
              >
                <img
                  src={`/uploads/googlePlay.png`}
                  alt={`download-app-from-google-play`}
                  className={`w-full object-cover`}
                />
              </Link>
              <Link
                className={`overflow-hidden w-48`}
                to={
                  "https://apps.apple.com/sa/app/qr-digital-health/id6754563872"
                }
                target="_blank"
              >
                <img
                  src={`/uploads/appleStore.png`}
                  alt={`download-app-from-app-store`}
                  className={`w-full object-cover`}
                />
              </Link>
            </div>
          </BannerSection>
        </Container>
      </div>
      {/* Download App */}
    </div>
  );
};

export default AboutUs;
