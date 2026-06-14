import { useParams } from "react-router-dom";
import NotFoundResource from "../components/ui/NotFoundResource";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Specializations";
import ContactUs from "./ContactUs";
import Blog from "./Blog/Blog";
import Doctors from "./doctors/Doctors";
import TermsOfUse from "./setting/TermsOfUse";
import PrivacyPolicy from "./setting/PrivacyPolicy";

const PageResolver = () => {
  const { page } = useParams();

  const routesMap = {
    home: Home,
    "about-us": AboutUs,
    services: Services,
    "contact-us": ContactUs,
    blogs: Blog,
    doctors: Doctors,
    "terms-of-use": TermsOfUse,
    "privacy-policy": PrivacyPolicy,
  };

  const Component = routesMap[page];

  if (!Component) return <NotFoundResource />;

  return <Component />;
};

export default PageResolver;
