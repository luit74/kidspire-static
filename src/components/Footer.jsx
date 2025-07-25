// src/components/Footer.js
import Link from "next/link";
import { FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container grid grid-four-cols">
        {/* Brand Section */}
        <div className="footer-1-div">
          <div className="brand-logo">
            <Link href="/" className="footer-subheading">
              Kidspire
            </Link>
          </div>
          <p>Let's revolutionize learning with Kidspire</p>
          <div className="social-footer-icons">
            <Link href="#">
              <FaFacebook />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaDiscord />
            </Link>
          </div>
        </div>

        {/* Courses Section */}
        <div className="footer-2-div">
          <p className="footer-subheading">Course</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>PYTHON</li>
            <li>JAVASCRIPT</li>
            <li>RUBY</li>
          </ul>
        </div>

        {/* Links Section */}
        <div className="footer-3-div">
          <p className="footer-subheading">Links</p>
          <ul>
            <li>MEETING</li>
            <li>CONFRENECE</li>
            <li>SPORTS</li>
            <li>MUSIC</li>
            <li>Home</li>
          </ul>
        </div>

        {/* Blogs Section */}
        <div className="footer-4-div">
          <p className="footer-subheading">Blogs</p>
          <ul>
            <li>Our Start</li>
            <li>First students</li>
            <li>Nice Holiday</li>
            <li>Funny Momments</li>
            <li>Trips</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
