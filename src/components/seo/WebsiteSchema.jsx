import { Helmet } from "react-helmet-async";

const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "QR Health",
    url: "https://qrhealth.sa",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://qrhealth.sa/en/blogs?search={query}",
      "query-input": "required name=query",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default WebsiteSchema;
