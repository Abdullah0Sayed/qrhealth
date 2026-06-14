import React from "react";
import BannerSection from "../components/ui/BannerSection";
import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";
import ServiceCard from "../components/ui/pages/services/ServiceCard";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../components/ui/PageTitle";
import HreflangTags from "../components/seo/HreflangTags";
import useServices from "../hooks/services/useServices";
import Loading from "../components/ui/Loading";

const Services = () => {
  const { t } = useTranslation("global");
  const { lang } = useParams();
  const { loading, error, services } = useServices();

  return (
    <div className={`w-full flex flex-col gap-4`}>
      <PageTitle
        pageName={`${t("app_name")} | ${t("pages.services.title")}`}
        metaContentDescription={t("pages.services.meta_description")}
      />
      <HreflangTags path="/services" lang={lang} />

      {/* Banner */}
      <BannerSection
        title={t("pages.services.banner.title")}
        description={t("pages.services.banner.description")}
        enableBannerBgColor={true}
      />

      {/* Cards */}
      <Container>
        <div
          className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}
        >
          {loading ? (
            <Loading />
          ) : error ? (
            <p className={`text-sm text-red-500 col-span-full text-center`}>
              {t("global.error_loading_services")}
            </p>
          ) : (
            services?.map((service) => (
              <ServiceCard
                key={service.id}
                serviceImagePath={service?.image}
                serviceTitle={service?.translation?.title ?? ""}
                description={service?.translation?.description ?? ""}
              />
            ))
          )}
        </div>
      </Container>

      {/* Download App */}
      <Container>
        <BannerSection
          title={t("global.download_qr_health_app_today.title")}
          description={t("global.download_qr_health_app_today.description")}
          bannerTitleColor={`text-fifth-color`}
          bannerDescriptionColor={`text-third-color`}
        >
          <div
            className={`flex flex-row flex-wrap shrink items-center justify-center gap-4 mt-4`}
          >
            <Link
              className={`overflow-hidden w-48`}
              to={`https://play.google.com/store/apps/details?id=com.qrdigitalhealth.qrdigitalhealth&pcampaignid=web_share`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`/uploads/googlePlay.png`}
                alt={`download-app-from-google-play`}
                className={`w-full object-cover`}
              />
            </Link>
            <Link
              className={`overflow-hidden w-48`}
              to={`https://apps.apple.com/sa/app/qr-digital-health/id6754563872`}
              target="_blank"
              rel="noreferrer"
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
  );
};

export default Services;
