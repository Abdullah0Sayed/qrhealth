import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "../pages/Layout";
import NotFoundResource from "../components/ui/NotFoundResource";
import ErrorPage from "../components/ui/ErrorPage";
import Loading from "../components/ui/Loading";

/** Lazy Pages */
const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Services = lazy(() => import("../pages/Services"));

const Doctors = lazy(() => import("../pages/doctors/Doctors"));
const Profile = lazy(() => import("../pages/doctors/Profile"));

const Blog = lazy(() => import("../pages/Blog/Blog"));
const PostDetails = lazy(() => import("../pages/Blog/PostDetails"));

const PrivacyPolicy = lazy(() => import("../pages/setting/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("../pages/setting/TermsOfUse"));

/** Shared Suspense Wrapper */
const withSuspense = (Component) => (
  <Suspense
    fallback={
      <div className={`min-h-screen`}>
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
    element: <Navigate to="/" replace />,
  },

  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      {
        path: "about-us",
        element: withSuspense(AboutUs),
      },
      {
        path: "contact-us",
        element: withSuspense(ContactUs),
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
    ],
  },

  {
    path: "*",
    element: <NotFoundResource />,
  },
]);
