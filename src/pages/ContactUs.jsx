import React, { useMemo } from "react";
import BannerSection from "../components/ui/BannerSection";
import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";
import { LuMail } from "react-icons/lu";
import HeroContactUsCard from "../components/ui/pages/contactUs/HeroContactUsCard";
import { FaPhone } from "react-icons/fa6";
import { PlaceholderDollar } from "lineicons-react";
import Form from "../components/form/Form";
import { contactUsService } from "../services/contactus/contactUsService";
import { data } from "react-router-dom";
import PageTitle from "../components/ui/PageTitle";
import toast from "react-hot-toast";

const ContactUs = () => {
  const { t } = useTranslation("global");
  const fields = useMemo(
    () => [
      {
        type: "text",
        name: "first_name",
        label: t("pages.contact_us.form_section.fields.first_name.label"),
        placeholder: t(
          "pages.contact_us.form_section.fields.first_name.placeholder",
        ),
        validations: {
          required: t(
            "pages.contact_us.form_section.fields.first_name.validations.required",
          ),
        },
      },
      {
        type: "text",
        name: "last_name",
        label: t("pages.contact_us.form_section.fields.last_name.label"),
        placeholder: t(
          "pages.contact_us.form_section.fields.last_name.placeholder",
        ),
        validations: {
          required: t(
            "pages.contact_us.form_section.fields.last_name.validations.required",
          ),
        },
      },
      {
        type: "text",
        name: "phone",
        label: t("pages.contact_us.form_section.fields.phone.label"),
        placeholder: t(
          "pages.contact_us.form_section.fields.phone.placeholder",
        ),
        validations: {
          required: t(
            "pages.contact_us.form_section.fields.phone.validations.required",
          ),
          pattern: {
            value: /^5\d{8}$/,
            message: t(
              "pages.contact_us.form_section.fields.phone.validations.pattern",
            ),
          },
          maxLength: {
            value: 9,
            message: t(
              "pages.contact_us.form_section.fields.phone.validations.minLength",
              {
                min: 9,
              },
            ),
          },
          minLength: {
            value: 9,
            message: t(
              "pages.contact_us.form_section.fields.phone.validations.minLength",
              {
                min: 9,
              },
            ),
          },
        },
      },
      {
        type: "text",
        name: "email",
        label: t("pages.contact_us.form_section.fields.email.label"),
        placeholder: t(
          "pages.contact_us.form_section.fields.email.placeholder",
        ),
      },
      {
        type: "textArea",
        name: "content",
        label: t("pages.contact_us.form_section.fields.message.label"),
        placeholder: t(
          "pages.contact_us.form_section.fields.message.placeholder",
        ),
        width: "col-span-2",
        validations: {
          required: t(
            "pages.contact_us.form_section.fields.message.validations.required",
          ),
        },
      },
    ],
    [t],
  );

  /** Handlers */
  const onSubmitForm = async (data) => {
    try {
      const payload = { ...data, type: "patient" };
      const res = await contactUsService.sendContactRequest(payload);
      console.log(payload);
      console.log(res?.data?.message);
      toast.success(res?.data?.message);
    } catch (error) {
      console.log(error?.response);
      toast.error(t(error?.response?.data.message || t("global.error")));
    }
  };
  return (
    <div className={`w-full flex flex-col`}>
      <PageTitle
        pageName={t("app_name") + "- " + t("pages.contact_us.title")}
      />

      {/* Banner */}
      <BannerSection
        title={t("pages.contact_us.banner.title")}
        description={t("pages.contact_us.banner.description")}
        enableBannerBgColor={true}
      />

      {/* Contact Hero Section */}
      <div className={`bg-header-topBar-color w-full p-16`}>
        {/* <Container> */}
        <div className={`w-full flex flex-col gap-8`}>
          {/* Hero Content Text */}
          <div className={`flex flex-col gap-3 items-center justify-center`}>
            <p className={`text-black text-3xl font-medium`}>
              {t("pages.contact_us.hero_section.heading")}
            </p>
            <div className={`flex flex-col items-center justify-center gap-1`}>
              <p className={`text-third-color text-base`}>
                {t("pages.contact_us.hero_section.hint1")}
              </p>
              <p className={`text-third-color text-base`}>
                {t("pages.contact_us.hero_section.hint2")}
              </p>
            </div>
          </div>
          {/* Hero Content Cards */}
          <div
            className={`w-full flex flex-row flex-wrap items-center justify-center gap-4`}
          >
            {/* Cards */}
            <HeroContactUsCard
              CardIcon={FaPhone}
              cardData={`00966552028136`}
              cardTitle={t("global.whatsapp")}
              url={`https://wa.me/00966552028136`}
            />
            <HeroContactUsCard
              CardIcon={LuMail}
              cardData={`info@qrhealth.sa`}
              cardTitle={t("global.email")}
              url={`mailto:info@qrhealth.sa`}
            />
          </div>
        </div>
        {/* </Container> */}
      </div>

      {/* Form */}
      <div className={`p-8 `}>
        <Container>
          <div className={`w-full flex flex-col gap-4`}>
            <div className={`flex flex-col gap-2`}>
              <span className={`text-base text-black/50`}>
                {t("pages.contact_us.form_section.heading")}
              </span>
              <span className={`text-3xl`}>
                {t("pages.contact_us.form_section.title")}
              </span>
            </div>
            <Form
              fields={fields}
              gridLayout={`grid-cols-2`}
              onSubmit={onSubmitForm}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;
