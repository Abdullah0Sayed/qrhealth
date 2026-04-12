import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/ui/Container";
import { blogService } from "../../services/blog/blogService";
import { getFeaturedImage } from "../../utils/getWordpressImage";
import { FaRegComments } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import Form from "../../components/form/Form";
import PageTitle from "../../components/ui/PageTitle";
import Loading from "../../components/ui/Loading";
import { useSelector } from "react-redux";

const PostDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation("global");
  const lang = useSelector((state) => state.webLanguage);
  const [post, setPost] = useState(null);
  const [postImage, setPostImage] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fields = useMemo(
    () => [
      {
        type: "text",
        name: "first_name",
        label: t("pages.blog.details.fields.name.label"),
        placeholder: t("pages.blog.details.fields.name.placeholder"),
        validations: {
          required: t("pages.blog.details.fields.name.validations.required"),
        },
        width: "col-span-2",
      },
      {
        type: "text",
        name: "website",
        label: t("pages.blog.details.fields.website.label"),
        placeholder: t("pages.blog.details.fields.website.placeholder"),
        validations: {
          required: t("pages.blog.details.fields.website.validations.required"),
        },
        width: "col-span-2",
      },
      {
        type: "text",
        name: "email",
        label: t("pages.blog.details.fields.email.label"),
        placeholder: t("pages.blog.details.fields.email.placeholder"),
        validations: {
          required: t("pages.blog.details.fields.email.validations.required"),
        },
        width: "col-span-2",
      },
      {
        type: "textArea",
        name: "comment",
        label: t("pages.blog.details.fields.comment.label"),
        placeholder: t("pages.blog.details.fields.comment.placeholder"),
        width: "col-span-2",
        validations: {
          required: t("pages.blog.details.fields.comment.validations.required"),
        },
      },
    ],
    [t],
  );
  const fetchPostById = async () => {
    setLoading(true);
    try {
      const { data } = await blogService.getPostById(id);
      setPost(data?.data);
    } catch (error) {
      console.log(error);
      setError("Failed to load post");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPostById();
    }
  }, [id, lang]);

  if (loading) {
    return (
      <div
        className={`w-full min-h-screen flex justify-center items-center py-20`}
      >
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className={`w-full flex justify-center items-center py-20`}>
        <p className={`text-red-500`}>{error}</p>
      </div>
    );
  }

  return (
    <div className={`w-full flex flex-col my-4 p-4`}>
      <PageTitle pageName={t("app_name") + "- " + post?.translation.title} />

      <div className={`w-full`}>
        <Container>
          <div
            className={`w-full border border-gray-200 rounded-md p-4 flex flex-col gap-8`}
          >
            {/* Post Image */}
            {post?.image && (
              <div className={`wrapper overflow-hidden w-full`}>
                <img
                  src={post?.image}
                  alt={`post-${post?.translation?.title}-image`}
                  className={`w-full object-cover rounded-md`}
                />
              </div>
            )}

            {/* Post Title */}
            <p
              className={`text-2xl font-bold`}
              dangerouslySetInnerHTML={{
                __html: post?.translation?.title || "",
              }}
            ></p>

            <div className={`w-full h-0.5 bg-gray-200`}></div>

            {/* Post Meta */}
            <div
              className={`w-full flex flex-row gap-8 items-center text-sm text-gray-500`}
            >
              <div className={`flex flex-row gap-2 items-center`}>
                <FaRegComments />
                <span>
                  {post?.status === 0 ? "التعليقات متاحة" : "التعليقات مغلقة"}
                </span>
              </div>

              <div className={`flex flex-row gap-2 items-center`}>
                <CiCalendar />
                <span>
                  {post?.created_at
                    ? new Date(post.created_at).toLocaleDateString("ar-EG", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : ""}
                </span>
              </div>
            </div>

            {/* Post Body */}
            <div
              className={`w-full flex flex-col gap-4 leading-7 text-gray-800 
              [&_p]:mb-3 
              [&_ul]:list-disc [&_ul]:pr-6 
              [&_li]:mb-2 
              [&_b]:font-bold`}
              dangerouslySetInnerHTML={{
                __html: post?.translation?.content || "",
              }}
            ></div>

            {/* Divider */}
            <div className={`w-full h-0.5 bg-gray-200`}></div>

            {/* Form */}
            <div className={`w-full flex flex-col gap-4 bg-gray-50 p-4`}>
              <p className={`text-lg font-semibold`}>
                {t("pages.blog.details.leave_comment")}+
              </p>

              <Form
                fields={fields}
                submit_label={t("pages.blog.details.leave_comment_btn")}
                gridLayout={`grid-cols-2`}
                onSubmit={async (data) => await console.log(data)}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PostDetails;
