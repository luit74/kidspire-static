"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="section-contact-homepage" id="section-contact-homepage">
      <div className="container grid grid-two-cols contact-box">
        {/* Contact Content */}
        <div className="contact-content">
          <h2 className="contact-title">
            Let's revolutionize the way you Study
          </h2>
          <p>Join our Free bootcamps to know us better</p>
          <div className="btn">
            <a href="/">
              START NOW <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Contact Image */}
        <div className="contact-image">
          <Image
            src="/audio-editing.png"
            alt="Audio Editing Icon"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
