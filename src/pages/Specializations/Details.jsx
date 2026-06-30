import React, { useEffect, useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import HreflangTags from "../../components/seo/HreflangTags";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import BannerSection from "../../components/ui/BannerSection";
import Container from "../../components/ui/Container";
import { Link, useParams } from "react-router-dom";
import { specializationService } from "../../services/Specializations/specializationService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft } from "lineicons-react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Details = () => {
  const { t } = useTranslation("global");
  const lang = useSelector((state) => state.webLanguage);
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  /** Category */
  const fetchCategory = async () => {
    setLoading(true);
    try {
      const { data } = await specializationService.getCategoryById(id);
      console.log(data?.data);
      setCategory(data?.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!id) return;
    fetchCategory();
  }, [id]);
  return (
    <div className={`w-full flex flex-col gap-4`}>
      <PageTitle
        pageName={t("app_name") + " | " + t("pages.specializations.title")}
        metaContentDescription={t("pages.specializations.meta_description")}
      />
      <HreflangTags path="/specializations" lang={lang} />

      {/* Banner */}
      <BannerSection
        title={t("pages.specializations.profile.banner.title", {
          specialization_title: category?.translation?.title,
        })}
        description={t("pages.specializations.profile.banner.description", {
          specialization_description: category?.translation?.description,
        })}
        enableBannerBgColor={true}
        customStyle={true}
      />

      {/* Container */}
      <Container>
        {category ? (
          <div
            className={`w-full bg-white shadow border border-gray-50 p-4 rounded-2xl flex flex-col-reverse lg:flex-row  gap-4`}
          >
            {/* Specialization Data */}
            <div className={`w-full flex flex-col gap-4`}>
              <p className={`text-3xl font-bold`}>
                {category?.translation?.title}
              </p>
              <span
                className={`text-base text-black/60 max-w-lg text-justify text-wrap leading-8`}
              >
                {category?.translation?.description}
              </span>
              <div className={`w-full h-0.5 bg-black/5 rounded-full`}></div>
              {/* symptoms */}
              <div className={`w-full flex flex-col gap-4`}>
                <p className={`text-2xl font-black`}>
                  {t("pages.specializations.profile.symptoms.title")}
                </p>
                <div
                  className={`w-full flex flex-row gap-2 flex-wrap items-center`}
                >
                  {category?.translation?.symptoms?.map((symptom) => {
                    return (
                      <span
                        key={symptom}
                        className={`w-fit px-2 py-1 bg-fifth-color text-white text-sm font-semibold hover:-translate-x-1 transition-all duration-150 ease-in rounded cursor-pointer`}
                      >
                        {symptom}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className={`w-full h-0.5 bg-black/5 rounded-full`}></div>
              <div className={`w-full flex flex-col gap-4`}>
                <p className={`text-2xl font-black`}>
                  {t("pages.specializations.profile.doctors.title")}
                </p>
                <div
                  className={`specializations-swiper-wrapper w-full relative h-full`}
                >
                  <Swiper
                    spaceBetween={8}
                    loop={true}
                    grabCursor={true}
                    breakpoints={{
                      0: { slidesPerView: 1 },
                      480: { slidesPerView: 2 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 2 },
                    }}
                    modules={[Autoplay, Pagination]}
                    pagination={{
                      clickable: true,
                      el: ".spec-swiper-pagination",
                    }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    className={`w-full`}
                  >
                    {category?.doctors?.map((doctor) => {
                      return (
                        <SwiperSlide key={doctor?.id} className={`h-auto`}>
                          <div
                            className={`doctor-card h-64 w-64 flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white  hover:border-fifth-color transition-all duration-300 ease-in-out p-6`}
                          >
                            <div
                              className={`specialization-icon w-full h-40 rounded-xl flex items-center justify-center overflow-hidden shrink-0`}
                            >
                              <img
                                src={doctor?.image}
                                alt={`${doctor?.name}-image`}
                                loading="lazy"
                                className={`w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105`}
                              />
                            </div>

                            {doctor?.name && (
                              <p
                                className={`specialization-title text-center text-base font-semibold text-black leading-snug`}
                              >
                                {`${t("global.doctor_title")} ${doctor.name}`}
                              </p>
                            )}
                            {doctor?.experience && (
                              <p
                                className={`w-fit px-2 py-1 text-center text-base font-semibold border-2 border-fifth-color rounded-full text-fifth-color leading-snug`}
                              >
                                {`${t("global.doctor_experience", { years: doctor.experience })} `}
                              </p>
                            )}
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>

                  {/* Custom Pagination */}
                  <div
                    className={`spec-swiper-pagination w-full flex justify-center items-center gap-1 mt-2`}
                  />
                </div>
              </div>
            </div>

            {/* Specialization Cover Image */}
            <div className={`w-full `}>
              <div
                className={`card-image rounded-2xl w-full h-full overflow-hidden`}
              >
                <img
                  src={category?.image}
                  alt={`${category?.translation?.title}-image`}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-all duration-150 ease-in`}
                />
              </div>
            </div>
          </div>
        ) : (
          error !== "" && (
            <div
              className={`w-full bg-white shadow border border-gray-50 p-4 rounded-2xl flex flex-col items-center justify-center  gap-4`}
            >
              <div
                className={`overflow-hidden w-full h-full flex items-center justify-center`}
              >
                <img
                  src={"/uploads/notFoundCategoryDetails.png"}
                  alt={`not-found-category-details`}
                  className={`object-cover w-full h-full`}
                />
              </div>
              <p
                className={`w-fit px-8 py-2 text-red-600 bg-red-200 rounded-md text-sm`}
              >
                {t("global.error_loading_category_details")}
              </p>
              <Link
                className={`border border-fifth-color text-fifth-color rounded-full px-2 py-1 w-fit flex flex-row items-center gap-2`}
                to={-1}
                replace
              >
                <BsFillArrowRightCircleFill />
                {t("global.back_to_previous_page")}
              </Link>
            </div>
          )
        )}
      </Container>
    </div>
  );
};

export default Details;
