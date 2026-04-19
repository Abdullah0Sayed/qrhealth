import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({
  pageName = "QR Health",
  metaContentDescription = "",
  metaContentKeyWords = "",
}) => {
  return (
    <Helmet>
      <title>{pageName}</title>

      {metaContentDescription && (
        <meta name="description" content={metaContentDescription} />
      )}

      {metaContentKeyWords && (
        <meta name="keywords" content={metaContentKeyWords} />
      )}

      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default PageTitle;
