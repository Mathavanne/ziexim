import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-600 body-font border border-t-2">
      <div className="container px-5 py-8 mx-auto flex flex-col items-center">
        <Link
          to="/"
          className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            src="/images/logo.png"
            alt="ZI Global ExIm Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="ml-3 text-xl">ZI Global ExIm</span>
        </Link>

        <p className="text-sm text-gray-500 text-center">
          © {currentYear} Developed by —{" "}
          <a
            href="https://maddy-portfolio-gules.vercel.app/"
            className="text-gray-600 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maddy
          </a>
        </p>

        <span className="inline-flex mt-4 justify-center space-x-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+917810029219"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-500 text-xl"
          >
            <FaWhatsapp />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ZI_Global_ExIm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-500 text-xl"
          >
            <FaInstagram />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/ZI Global ExIm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 text-xl"
          >
            <FaFacebookF />
          </a>

          {/* Telephone */}
          <a
            href="tel:+917358599529"
            className="text-gray-500 hover:text-blue-500 text-xl"
          >
            <FaPhoneAlt />
          </a>

          {/* Email */}
          <a
            href="mailto:business@ziglobalexim.com"
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            <FaEnvelope />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
