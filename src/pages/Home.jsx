import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Container from "../components/ui/Container";
import useDoctors from "../hooks/doctors/useDoctors";
import useBlogs from "../hooks/blog/useBlogs";
import { faqList } from "../utils/FaqList";
import AccordionItem from "../components/ui/pages/home/AccordionItem";
import { FaHandHoldingHeart } from "react-icons/fa";
import PageTitle from "../components/ui/PageTitle";
import HreflangTags from "../components/seo/HreflangTags";
import useSpecializations from "../hooks/specializations/useSpecializations";
import SpecializationCard from "../components/ui/pages/specializations/SpecializationCard";
import useServices from "../hooks/services/useServices";
import ServiceCard from "../components/ui/pages/services/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Loading from "../components/ui/Loading";

const Home = () => {
  const { t } = useTranslation("global");
  const { doctors } = useDoctors();
  const { specializations, specializationLoading, specializationError } =
    useSpecializations();
  const {
    services,
    loading: servicesLoading,
    error: servicesError,
  } = useServices();
  const { blogs } = useBlogs();
  const { lang } = useParams();
  // const [patientCounter, setPatientCounter] = useState(95);
  const [activeAccordIndex, setActiveAccordIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveAccordIndex((prev) => (prev === index ? null : index));
  };

  // useEffect(() => {
  //   let start = 0;
  //   const end = 96;
  //   const duration = 2000;
  //   const increment = end / (duration / 16);

  //   const timer = setInterval(() => {
  //     start += increment;
  //     if (start >= end) {
  //       setPatientCounter(end);
  //       clearInterval(timer);
  //     } else {
  //       setPatientCounter(Math.floor(start));
  //     }
  //   }, 16);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className={`w-full flex flex-col gap-8`}>
      <PageTitle
        pageName={`${t("app_name")} | ${t("pages.home.title")}`}
        metaContentDescription={t("pages.home.meta_description")}
      />
      <HreflangTags path="" lang={lang} />

      {/* Banner */}
      <div
        className={`w-full flex flex-col gap-4 items-center justify-center h-full py-4 lg:py-0 lg:h-home-banner-height bg-fifth-color`}
        style={{
          backgroundImage: 'url("/uploads/banner.webp")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={`w-fit group rounded-xl p-4 bg-fifth-color  flex flex-col gap-2 items-center justify-center`}
        >
          <div
            className={`w-40 h-40 bg-white group-hover:-translate-y-2 transition-all duration-400 ease-in group-hover:border-fifth-color shadow border border-gray-200 rounded-xl aspect-square flex items-center justify-center overflow-hidden`}
          >
            <img
              src={`/uploads/moh_gov_logo.png`}
              alt={`وزارة الصحة السعودية`}
              className={`object-contain w-full`}
            />
          </div>
          <p className={`text-sm font-bold text-white text-center `}>
            {t("pages.home.banner.moh_license")}
          </p>
          <p
            className={`text-sm font-bold text-white text-center flex items-center gap-1`}
          >
            <span>{t("pages.home.banner.license_no")} : </span>
            <span>4400088745</span>
          </p>
        </div>
        <p className={`text-3xl font-bold text-fifth-color text-center`}>
          {t("pages.home.banner.title")}
        </p>
        <p className={`text-base text-black text-center`}>
          {t("pages.home.banner.description")}
        </p>
        <div
          className={`w-full flex flex-row flex-wrap gap-2 items-center justify-center p-2`}
        >
          <Link
            className={`px-8 py-2 bg-fifth-color text-white flex flex-row items-center gap-2 rounded text-sm justify-center`}
            to={`https://play.google.com/store/apps/details?id=com.qrdigitalhealth.qrdigitalhealth&pcampaignid=web_share`}
            target="_blank"
            rel="noreferrer"
          >
            {t("global.download_app_from_google_play")}
            <FaGooglePlay />
          </Link>
          <Link
            className={`px-8 py-2 bg-fifth-color text-white flex flex-row items-center gap-2 rounded text-sm justify-center`}
            to={`https://apps.apple.com/sa/app/qr-digital-health/id6754563872`}
            target="_blank"
            rel="noreferrer"
          >
            {t("global.download_app_from_app_store")}
            <FaAppStoreIos />
          </Link>
        </div>
      </div>

      {/* Specializations */}
      <div className={`w-full`}>
        <Container className={`flex flex-col gap-6`}>
          <div className={`w-full flex justify-center items-center`}>
            <p className={`text-3xl`}>{t("pages.home.specialists.title")}</p>
          </div>

          {servicesLoading ? (
            <Loading />
          ) : servicesError ? (
            <p className={`text-sm text-red-500 text-center w-full`}>
              {t("global.error_loading_specializations")}
            </p>
          ) : (
            <div
              className={`specializations-swiper-wrapper w-full relative px-10 h-full`}
            >
              <Swiper
                spaceBetween={16}
                loop={true}
                grabCursor={true}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  480: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
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
                className={`w-full pb-10`}
              >
                {specializations?.map((specialize) => {
                  const translation = specialize?.translations?.find(
                    (e) => e.locale === lang,
                  );
                  return (
                    <SwiperSlide key={specialize?.id} className={`h-auto`}>
                      <SpecializationCard
                        specialize={specialize}
                        translation={translation}
                        id={specialize?.id}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/* Custom Pagination */}
              <div
                className={`spec-swiper-pagination w-full flex justify-center items-center gap-1 mt-2`}
              />
            </div>
          )}
        </Container>
      </div>

      {/* Doctors */}
      <div className={`w-full bg-header-topBar-color p-8`}>
        <Container>
          <div
            className={`w-full flex flex-col justify-center items-center gap-4`}
          >
            <div className={`flex flex-col gap-2 items-center justify-center`}>
              <p className={`text-4xl`}>{t("pages.home.doctors.title")}</p>
              <p className={`text-base text-second-color`}>
                {t("pages.home.doctors.description")}
              </p>
            </div>
            <div className={`w-full p-4 grid lg:grid-cols-3 grid-cols-1 gap-4`}>
              {Array.isArray(doctors) &&
                doctors.slice(0, 3).map((doctor) => (
                  <Link
                    key={doctor.id}
                    to={`doctors/${doctor.id}`}
                    className={`doctor-card grow p-4 flex flex-col gap-3 border border-gray-200`}
                  >
                    <div
                      className={`image-wrapper overflow-hidden w-full h-96 bg-gray-100`}
                    >
                      <img
                        src={
                          doctor.image
                            ? doctor.image
                            : `/uploads/noImageFounded.webp`
                        }
                        alt={`${doctor.name}-image`}
                        className={`object-cover w-full h-full`}
                      />
                    </div>
                    <div
                      className={`w-full flex flex-row items-center gap-2 flex-wrap flex-1`}
                    >
                      {doctor?.categories?.map((category) => {
                        return (
                          <span
                            className={`px-2 py-0.5 rounded bg-doctor-card-span-color text-white text-sm`}
                          >
                            {category?.translation.title}
                          </span>
                        );
                      })}
                    </div>
                    <div className={`flex text-wrap flex-wrap w-full`}>
                      <span className={`text-2xl font-bold text-black/80`}>
                        {`${t("global.doctor_title")} ${lang === "ar" ? doctor.name : doctor?.name_en || doctor?.name}`}
                      </span>
                    </div>
                    <div className={`w-full grow-0`}>
                      <span
                        className={`bg-fifth-color transition-all duration-300 ease-in-out hover:bg-footer-color text-white px-2 py-0.5 text-sm rounded-md`}
                      >
                        {t("pages.doctors.show_doctor_details")}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
            {doctors.length !== 0 && (
              <Link
                to={`doctors`}
                className={`px-4 py-2 rounded text-fifth-color hover:text-white transition-all duration-300 ease-in-out hover:bg-fifth-color hover:border-none border border-primary-color text-sm flex justify-center items-center`}
              >
                {t("global.load_all")}
              </Link>
            )}
          </div>
        </Container>
      </div>

      {/* Faqs */}
      <div className={`w-full`}>
        <Container>
          <div className={`flex flex-col gap-8`}>
            <div className={`flex flex-col items-center justify-center gap-4`}>
              <p className={`text-xl text-primary-color`}>
                {t("pages.home.faqs.title")}
              </p>
              <p
                className={`text-3xl text-shadow-footer-color relative`}
                id="faq_description"
              >
                {t("pages.home.faqs.description")}
              </p>
            </div>
            <div
              className={`w-full flex lg:flex-row flex-col gap-4 justify-center p-4`}
            >
              <div
                className={`relative w-full flex items-center justify-center`}
              >
                <div className={`wrapper w-lg overflow-hidden`}>
                  <img
                    src={`/uploads/faqImage.png`}
                    alt={`faq-section`}
                    className={`w-full h-full object-cover transition-all duration-500 ease-in-out`}
                  />
                </div>
                {/* <div
                  className={`w-64 h-20 rounded-2xl absolute bottom-0 right-0 lg:-translate-x-40 -translate-x-20 lg:-translate-y-40 -translate-y-4 bg-white text-fifth-color shadow flex flex-row gap-4 items-center justify-center`}
                >
                  <div
                    className={`flex flex-col text-black items-center justify-center gap-1`}
                  >
                    <span
                      className={`font-semibold text-2xl`}
                    >{`+${patientCounter}K`}</span>
                    <span>{t("pages.home.happy_patients")}</span>
                  </div>
                  <FaHandHoldingHeart className={`text-4xl`} />
                </div> */}
              </div>
              <div className={`w-full flex flex-col gap-4 items-center`}>
                {faqList.map((faq, index) => (
                  <AccordionItem
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    hint={faq.hint}
                    list={faq.list}
                    type={faq.type}
                    isOpen={activeAccordIndex === index}
                    onClick={() => handleToggle(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Blogs */}
      <div className={`w-full`}>
        <Container>
          <div className={`w-full p-4 grid lg:grid-cols-3 grid-cols-1 gap-4`}>
            {Array.isArray(blogs) &&
              blogs.slice(0, 3).map((blog) => {
                const imageUrl = blog?.image || `/uploads/noImageFounded.webp`;
                return (
                  <Link
                    key={blog.id}
                    to={`blogs/${blog.id}`}
                    className={`blog-card w-96 h-96 p-4 flex flex-col gap-4 border border-gray-200`}
                  >
                    <div
                      className={`card-image rounded-2xl overflow-hidden w-full h-64`}
                    >
                      <img
                        src={imageUrl}
                        alt={`${blog?.translation?.title}-image`}
                        className={`object-cover w-full h-full transition-all duration-500 ease-in-out`}
                      />
                    </div>
                    <div className={`flex text-wrap flex-wrap max-w-2xs`}>
                      <span className={`text-xl text-black/80`}>
                        {blog?.translation?.title}
                      </span>
                    </div>
                    <div className={`w-full grow-0`}>
                      <span
                        className={`bg-fifth-color transition-all duration-300 ease-in-out hover:bg-footer-color text-white px-4 py-1.5 text-sm rounded-md`}
                      >
                        {t("pages.blog.read_more")}
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
          {blogs.length !== 0 && (
            <div className={`w-full flex justify-center items-center`}>
              <Link
                to={`blogs`}
                className={`px-4 py-2 rounded text-fifth-color hover:text-white transition-all duration-300 ease-in-out hover:bg-fifth-color hover:border-none border border-primary-color text-sm flex justify-center items-center`}
              >
                {t("global.load_all")}
              </Link>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Home;
