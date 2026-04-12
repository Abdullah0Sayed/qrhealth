import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useDoctors from "../../hooks/doctors/useDoctors";
import BannerSection from "../../components/ui/BannerSection";
import Container from "../../components/ui/Container";
import Loading from "../../components/ui/Loading";
import PageTitle from "../../components/ui/PageTitle";

const Doctors = () => {
  const { t } = useTranslation("global");
  const { doctors, loading } = useDoctors();
  if (loading) {
    return (
      <div
        className={`w-full min-h-screen flex justify-center items-center py-20`}
      >
        <Loading />
      </div>
    );
  }
  return (
    <div className={`w-full flex flex-col gap-8`}>
      <PageTitle pageName={t("app_name") + "- " + t("pages.doctors.title")} />

      {/* Banner */}
      <BannerSection
        title={t("pages.doctors.banner.title")}
        description={t("pages.doctors.banner.description")}
        enableBannerBgColor={true}
      />

      {/* Doctors */}
      <Container>
        <div className={`w-full p-4 grid lg:grid-cols-3 grid-cols-1 gap-4`}>
          {Array.isArray(doctors) &&
            doctors.map((doctor) => (
              <Link
                key={doctor.id}
                to={`${doctor.id}`}
                className={`doctor-card w-full p-4 flex flex-col gap-3 border border-gray-200`}
              >
                <div
                  className={`image-wrapper overflow-hidden w-full h-96 bg-gray-100`}
                >
                  <img
                    src={
                      doctor.image
                        ? doctor.image
                        : "/uploads/noImageFounded.webp"
                    }
                    alt={`${doctor.name}-image`}
                    className={`object-cover w-full h-full`}
                  />
                </div>
                <div className={`w-full flex flex-row gap-2 flex-wrap flex-1`}>
                  <span
                    className={`px-2 py-0.5 rounded bg-doctor-card-span-color text-white text-sm`}
                  >
                    {doctor.category.translation.title}
                  </span>
                </div>
                <div className={`flex text-wrap flex-wrap w-full `}>
                  <span className={`text-2xl font-bold text-black/80`}>
                    {`${t("global.doctor_title")} ${doctor.name}`}
                  </span>
                </div>
                <div className={`w-full grow-0`}>
                  <span
                    className={`bg-fifth-color transition-all duration-300 ease-in-out hover:bg-footer-color text-white px-2 py-0.5 text-sm rounded-md`}
                    to={`${doctor.id}`}
                  >
                    {t("pages.doctors.show_doctor_details")}
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Doctors;
