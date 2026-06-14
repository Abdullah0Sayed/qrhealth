import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "../pages/Layout";
import NotFoundResource from "../components/ui/NotFoundResource";
import ErrorPage from "../components/ui/ErrorPage";
import Loading from "../components/ui/Loading";

import PageResolver from "../pages/PageResolver";

/** Lazy Pages */
const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Specializations = lazy(() => import("../pages/Specializations"));
const SpecializationDetails = lazy(
  () => import("../pages/Specializations/Details"),
);
const Services = lazy(() => import("../pages/Services"));
const PrivacyPolicy = lazy(() => import("../pages/setting/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("../pages/setting/TermsOfUse"));

const Blog = lazy(() => import("../pages/Blog/Blog"));
const PostDetails = lazy(() => import("../pages/Blog/PostDetails"));

const Doctors = lazy(() => import("../pages/doctors/Doctors"));
const Profile = lazy(() => import("../pages/doctors/Profile"));

const withSuspense = (Component) => (
  <Suspense
    fallback={
      <div className="min-h-screen">
        <Loading />
      </div>
    }
  >
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/ar" replace />,
  },

  {
    path: "/:lang",
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      /** 🟢 HOME */
      {
        index: true,
        element: withSuspense(Home),
      },

      /** 🟢 STATIC PAGES (SEO SAFE) */
      {
        path: "about-us",
        element: withSuspense(AboutUs),
      },
      {
        path: "contact-us",
        element: withSuspense(ContactUs),
      },
      {
        path: "specializations",
        element: withSuspense(Specializations),
      },
      {
        path: "specializations/:id/details",
        element: withSuspense(SpecializationDetails),
      },
      {
        path: "services",
        element: withSuspense(Services),
      },
      {
        path: "privacy-policy",
        element: withSuspense(PrivacyPolicy),
      },
      {
        path: "terms-of-use",
        element: withSuspense(TermsOfUse),
      },

      /** 🟡 BLOGS */
      {
        path: "blogs",
        children: [
          {
            index: true,
            element: withSuspense(Blog),
          },
          {
            path: ":id",
            element: withSuspense(PostDetails),
          },
        ],
      },

      /** 🟡 DOCTORS */
      {
        path: "doctors",
        children: [
          {
            index: true,
            element: withSuspense(Doctors),
          },
          {
            path: ":id",
            element: withSuspense(Profile),
          },
        ],
      },

      /** 🔵 DYNAMIC SEO FALLBACK (LAST ONLY) */
      {
        path: ":page",
        element: <PageResolver />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundResource />,
  },
]);
