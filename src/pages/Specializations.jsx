import React from "react";
import BannerSection from "../components/ui/BannerSection";
import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";
import { qrSpecializations } from "../utils/QrSpecializations";
import ServiceCard from "../components/ui/pages/services/ServiceCard";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../components/ui/PageTitle";
import HreflangTags from "../components/seo/HreflangTags";
import useSpecializations from "../hooks/specializations/useSpecializations";
import Loading from "../components/ui/Loading";
import SpecializationCard from "../components/ui/pages/specializations/SpecializationCard";

const Specializations = () => {
  const { t } = useTranslation("global");
  const { lang } = useParams();
  const { specializations, specializationLoading, specializationError } =
    useSpecializations();
  return (
    <div className={`w-full flex flex-col gap-4`}>
      <PageTitle
        pageName={t("app_name") + " | " + t("pages.specializations.title")}
        metaContentDescription={t("pages.specializations.meta_description")}
      />
      <HreflangTags path="/specializations" lang={lang} />

      {/* Banner */}
      <BannerSection
        title={t("pages.specializations.banner.title")}
        description={t("pages.specializations.banner.description")}
        enableBannerBgColor={true}
        customStyle={true}
      />

      {/* Cards */}
      <Container>
        <div
          className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}
        >
          {specializationLoading ? (
            <Loading />
          ) : specializationError ? (
            <p className={`text-sm text-red-500 col-span-full text-center`}>
              {t("global.error_loading_specializations")}
            </p>
          ) : (
            specializations?.map((specialization) => {
              const translation = specialization?.translations?.find(
                (e) => e?.locale === lang,
              );
              return (
                <SpecializationCard
                  key={specialization?.id}
                  specialize={specialization}
                  translation={translation}
                  id={specialization?.id}
                  showDetailsBtn={true}
                  detailsPath={`${specialization?.id}/details`}
                />
              );
            })
          )}
        </div>
      </Container>

      {/* Download App */}
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
  );
};

export default Specializations;
