import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/Services";
import Doctors from "../pages/doctors/Doctors";
import Profile from "../pages/doctors/Profile";
import Blog from "../pages/Blog/Blog";
import PostDetails from "../pages/Blog/PostDetails";
import PrivacyPolicy from "../pages/setting/PrivacyPolicy";
import TermsOfUse from "../pages/setting/TermsOfUse";
import NotFoundResource from "../components/ui/NotFoundResource";
import ErrorPage from "../components/ui/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={``} replace />,
  },
  {
    path: "*",
    element: <NotFoundResource />,
  },
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "blogs",
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: ":id",
            element: <PostDetails />,
          },
        ],
      },
      {
        path: "doctors",
        children: [
          {
            index: true,
            element: <Doctors />,
          },
          {
            path: ":id",
            element: <Profile />,
          },
        ],
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms-of-use",
        element: <TermsOfUse />,
      },
    ],
  },
]);
