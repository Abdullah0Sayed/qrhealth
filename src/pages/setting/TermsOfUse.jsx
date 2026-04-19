import React from "react";
import usePrivacyPolicy from "../../hooks/policy/usePrivacyPolicy";
import Container from "../../components/ui/Container";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/ui/PageTitle";
import { useParams } from "react-router-dom";
import HreflangTags from "../../components/seo/HreflangTags";

const TermsOfUse = () => {
  const { privacyPolicy, termsOfUse, loading, error, refetchPolicies } =
    usePrivacyPolicy();
  const { t } = useTranslation("global");
  const { lang } = useParams();
  return (
    <div className={`w-full flex flex-col gap-4 my-8`}>
      <PageTitle
        pageName={t("app_name") + " | " + t("pages.terms_of_use.title")}
        metaContentDescription={t("pages.terms_of_use.meta_description")}
      />

      <HreflangTags path="/terms-of-use" lang={lang} />

      <Container>
        <div className={`w-full flex flex-col gap-8`}>
          {termsOfUse.map((term, index) => (
            <div className={`flex flex-col gap-4 w-full`} key={index}>
              <p
                className={`text-black text-2xl`}
              >{`${++index}. ${term.translation.title}`}</p>
              <p className={`text-justify text-wrap text-black/80`}>
                {term.translation.content}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TermsOfUse;
