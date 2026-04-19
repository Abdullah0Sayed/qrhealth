import { Helmet } from "react-helmet-async";

const HreflangTags = ({ lang, path }) => {
  const baseUrl = "https://qrhealth.sa";

  return (
    <Helmet>
      <link rel="alternate" hrefLang="ar" href={`${baseUrl}/ar${path}`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en${path}`} />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}/en${path}`}
      />
    </Helmet>
  );
};

export default HreflangTags;
