import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import BannerSection from "../../components/ui/BannerSection";
import Container from "../../components/ui/Container";
import useBlogs from "../../hooks/blog/useBlogs";
import PageTitle from "../../components/ui/PageTitle";
import HreflangTags from "../../components/seo/HreflangTags";

const Blog = () => {
  const { t } = useTranslation("global");
  const { blogs } = useBlogs();
  const { lang } = useParams();
  return (
    <div className={`w-full flex flex-col`}>
      <PageTitle
        pageName={t("app_name") + " | " + t("pages.blog.title")}
        metaContentDescription={t("pages.blog.meta_description")}
      />

      <HreflangTags path="/blogs" lang={lang} />

      <BannerSection
        title={t("pages.blog.banner.title")}
        description={t("pages.blog.banner.description")}
        enableBannerBgColor={true}
      />

      {/* Blogs */}
      {/* <Container> */}
      <div className={`w-full p-4 grid lg:grid-cols-3 grid-cols-1 gap-4`}>
        {Array.isArray(blogs) &&
          blogs.map((blog) => {
            const imageUrl = blog?.image || "/uploads/noImageFounded.webp";

            return (
              <Link
                key={blog.id}
                to={`${blog.id}`}
                className={`blog-card w-full grow p-4 flex flex-col gap-4 border border-gray-200`}
              >
                <div
                  className={`card-image rounded-2xl overflow-hidden w-full h-64`}
                >
                  <img
                    src={imageUrl}
                    alt={`${blog?.translation.title}-image`}
                    className={`object-cover w-full h-full transition-all duration-500 ease-in-out`}
                  />
                </div>

                <div className={`flex text-wrap flex-wrap max-w-2xs`}>
                  <span className={`text-xl text-black/80`}>
                    {blog?.translation.title}
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
      {/* </Container> */}
    </div>
  );
};

export default Blog;
