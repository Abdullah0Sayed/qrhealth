import React from "react";
import usePrivacyPolicy from "../../hooks/policy/usePrivacyPolicy";
import Container from "../../components/ui/Container";
import PageTitle from "../../components/ui/PageTitle";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { privacyPolicy, termsOfUse, loading, error, refetchPolicies } =
    usePrivacyPolicy();
  const { t } = useTranslation("global");
  return (
    <div className={`w-full flex flex-col gap-4 my-8`}>
      <PageTitle pageName={t("app_name") + "- " + t("pages.privacy.title")} />

      <Container>
        <div className={`w-full flex flex-col gap-8`}>
          {privacyPolicy.map((privacy, index) => (
            <div className={`flex flex-col gap-4 w-full`} key={index}>
              <p
                className={`text-black text-2xl`}
              >{`${++index}. ${privacy.translation.title}`}</p>
              <p className={`text-justify text-wrap text-black/80`}>
                {privacy.translation.content}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
