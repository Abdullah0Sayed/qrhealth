import { MdWhatsapp } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export const FooterLinks = [
  {
    title: "footer.links.company.title",
    children: [
      {
        path: "about-us",
        title: "footer.links.company.about_us",
      },
      {
        path: "contact-us",
        title: "footer.links.company.contact_us",
      },
      {
        path: "blogs",
        title: "footer.links.company.blogs",
      },
    ],
  },
  {
    title: "footer.links.services.title",
    children: [
      {
        title: "footer.links.services.internal_medicine",
      },
      {
        title: "footer.links.services.family_medicine",
      },
      {
        title: "footer.links.services.geriatrics",
      },
      {
        title: "footer.links.services.palliative_care",
      },
    ],
  },
  {
    title: "footer.links.legal.title",
    children: [
      {
        path: {
          en: "terms-of-use",
          ar: "terms-of-use",
        },
        title: "footer.links.legal.terms_of_use",
      },
      {
        path: {
          en: "privacy-policy",
          ar: "privacy-policy",
        },
        title: "footer.links.legal.privacy_policy",
      },
    ],
  },
  {
    title: "footer.links.request_our_services.title",
    children: [
      {
        path: "https://play.google.com/store/apps/details?id=com.qrdigitalhealth.qrdigitalhealth&pcampaignid=web_share",
        title: "footer.links.request_our_services.download_app",
      },
    ],
  },
  {
    title: "footer.links.contact_us.title",
    children: [
      {
        content: (
          <Link
            className={`flex flex-row gap-2 items-center text-base text-white`}
            to={"https://wa.me/00966552028136"}
            target="_blank"
          >
            <MdWhatsapp />
            <span className={``}>966552028136</span>
          </Link>
        ),
      },
      {
        content: (
          <Link
            className={`flex flex-row gap-2 items-center text-base text-white`}
            to={"mailto:info@qrhealth.sa"}
            target="_blank"
          >
            <IoMailOutline />
            <span className={``}>info@qrhealth.sa</span>
          </Link>
        ),
      },
    ],
  },
  {
    title: "footer.links.follow_us.title",
    children: [
      {
        content: (
          <div className={`flex flex-row gap-2 items-center`}>
            <Link
              className={`flex justify-center items-center text-base  w-8 h-8 rounded-full bg-white text-btn-color`}
              to={"https://www.linkedin.com/company/qrhealth/"}
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link
              className={`flex justify-center items-center text-base  w-8 h-8 rounded-full bg-white text-btn-color`}
              to={"https://www.instagram.com/qrhealth/"}
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </div>
        ),
      },
    ],
  },
];
