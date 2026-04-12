import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({
  pageName,
  metaContentDescription,
  metaContentKeyWords,
}) => {
  return (
    <Helmet>
      <title>{pageName}</title>
      <meta name="description" content={metaContentDescription} />
      <meta name="keywords" content={metaContentKeyWords} />
    </Helmet>
  );
};

export default PageTitle;
