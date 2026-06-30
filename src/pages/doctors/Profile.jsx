import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/ui/Container";
import { useTranslation } from "react-i18next";
import useDoctors from "../../hooks/doctors/useDoctors";
import { doctorService } from "../../services/doctor/doctorService";
import Loading from "../../components/ui/Loading";
import PageTitle from "../../components/ui/PageTitle";
import { BsDownload, BsFile, BsFileEarmarkPdf } from "react-icons/bs";
import { useSelector } from "react-redux";
import HreflangTags from "../../components/seo/HreflangTags";

const Profile = () => {
  const { id } = useParams();
  const { t } = useTranslation("global");
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang } = useParams();

  const fetchDoctorById = async () => {
    setLoading(true);
    try {
      const { data } = await doctorService.getDoctorById(id);
      console.log(data?.data);
      setDoctor(data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      fetchDoctorById();
    }
  }, [id, lang]);

  const profileInfoLists = [
    {
      title: t("pages.doctors.profile.links.info"),
      content: (
        <div>{lang === "ar" ? doctor?.bio : doctor?.bio_en || doctor?.bio}</div>
      ),
    },
    // {
    //   title: t("pages.doctors.profile.links.areas_of_expertise"),
    //   content: doctor?.category ? (
    //     <div>{doctor?.category?.translation?.title}</div>
    //   ) : (
    //     <div>{t("global.not_found_file")}</div>
    //   ),
    // },
    // {
    //   title: t("pages.doctors.profile.links.academic_qualifications"),
    //   content:
    //     doctor?.bachelor_certificate_file ||
    //     doctor?.specialization_certificate_file ? (
    //       <div className={`flex flex-row items-center gap-2`}>
    //         {doctor?.bachelor_certificate_file && (
    //           <div className={`flex flex-row items-center gap-2`}>
    //             <button
    //               className={`px-4 py-2 cursor-pointer bg-primary-color text-white rounded-2xl flex items-center justify-center gap-2`}
    //               onClick={() => {
    //                 window.open(doctor?.bachelor_certificate_file, "_blank");
    //               }}
    //             >
    //               <BsFileEarmarkPdf />
    //               {t("global.bachelor_certificate_file")}
    //             </button>
    //           </div>
    //         )}
    //         {doctor?.specialization_certificate_file && (
    //           <div className={`flex flex-row items-center gap-2`}>
    //             <button
    //               className={`px-4 py-2 cursor-pointer bg-primary-color text-white rounded-2xl flex items-center justify-center gap-2`}
    //               onClick={() => {
    //                 window.open(
    //                   doctor?.specialization_certificate_file,
    //                   "_blank",
    //                 );
    //               }}
    //             >
    //               <BsFileEarmarkPdf />
    //               {t("global.specialization_certificate_file")}
    //             </button>
    //           </div>
    //         )}
    //       </div>
    //     ) : (
    //       <div>{t("global.not_found_file")}</div>
    //     ),
    // },
    // {
    //   title: t("pages.doctors.profile.links.age_group"),
    //   content: (
    //     <div>
    //       {doctor?.age
    //         ? t("pages.doctors.profile.calc_age", { age: doctor?.age })
    //         : t("global.not_found_file")}
    //     </div>
    //   ),
    // },
  ];

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
    <>
      <PageTitle
        pageName={
          t("app_name") +
          " | " +
          `${lang === "ar" ? doctor?.name : doctor?.name_en || doctor?.name}`
        }
        metaContentDescription={t("pages.doctors.profile.meta_description")}
      />
      <HreflangTags path={`/doctors/${id}`} lang={lang} />

      <div className={`w-full flex flex-col my-8 `}>
        {/* Profile */}
        <Container>
          {loading ? (
            <div>{t("global.loading")}</div>
          ) : (
            <div
              className={`border border-gray-200 rounded-md flex flex-col gap-4 p-4`}
            >
              <div className={`flex flex-row justify-between`}>
                <p className={`text-black font-bold`}>
                  {t("pages.doctors.profile.about_doctor") +
                    " " +
                    `${
                      lang === "ar"
                        ? doctor?.name
                        : doctor?.name_en || doctor?.name
                    }`}
                </p>
                {/* <div
                  className={`image-wrapper overflow-hidden w-96 h-96 border bg-gray-100`}
                >
                  <img
                    src={
                      doctor?.image
                        ? doctor?.image
                        : "/uploads/noImageFounded.webp"
                    }
                    alt={`${doctor?.name}-image`}
                    className={`object-cover w-full h-full`}
                  />
                </div> */}
              </div>

              {/* Links */}
              <div className={`flex flex-col`}>
                <div className={`w-full flex flex-row flex-wrap gap-1`}>
                  {profileInfoLists.map((list, index) => (
                    <span
                      className={`cursor-pointer px-2 py-1 text-base  ${index === activeIndex ? "text-black/80 border border-gray-200" : "text-primary-color"} hover:bg-fourth-color transition-all duration-200 ease-in-out hover:text-white rounded`}
                      onClick={() => {
                        setActiveIndex(index);
                      }}
                      key={index}
                    >
                      {list.title}
                    </span>
                  ))}
                </div>
                {/* Content */}
                <div className={`border text-black border-gray-100 p-4`}>
                  {profileInfoLists[activeIndex].content}
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default Profile;
