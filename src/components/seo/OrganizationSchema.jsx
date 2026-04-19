import { Helmet } from "react-helmet-async";

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "QR Health",
    url: "https://qrhealth.sa",
    logo: "https://qrhealth.sa/uploads/qrLogo.png",
    description:
      "Digital healthcare platform providing medical consultations and health services.",
    sameAs: [
      "https://www.linkedin.com/company/qrhealth/",
      "https://www.instagram.com/qrhealth/",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default OrganizationSchema;
