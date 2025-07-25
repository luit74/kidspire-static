import Image from "next/image";
import styles from "./page.module.css";
import About from "./about/page";
import CourseSection from "@/components/CourseSection";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/Why";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CourseSection />

      <WhyChooseUs />

      <div className="section-contact-homepage" id="section-contact-homepage">
        <div className="container grid grid-two-cols contact-box">
          <div className="contact-content">
            <h2 className="contact-title">
              Let&apos;s revolutionize the way you Study
            </h2>

            <p>Join our Free bootcamps to know us better</p>
            <div className="btn">
              <Link href="/">
                START NOW <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="contact-image">
            <Image
              src="/audio-editing.png"
              alt="Audio Editing Icon"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
