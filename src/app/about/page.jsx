"use client";
import Image from "next/image";

const About = () => {
  return (
    <section className="section-about">
      <div className="container">
        <h2 className="section-common-heading">
          About Kidspire EduHub
        </h2>
        <p className="section-common-subheading">
          Guiding Your Learning Journey Through Research, Design and Development Excellence.
        </p>
      </div>

      <div className="container grid grid-three-cols">
        {/* Research */}
        <div className="about-div">
          <div className="icon">
            <Image
              src="/Learning.png"
              alt="Learning Icon"
              width={100}
              height={100}
            />
          </div>
          <h3 className="section-common-title">
            Research
          </h3>
          <p>
            Have deep research in all the popular topics, with the best mentorship to clear all the concepts.
          </p>
        </div>

        {/* Global Placement */}
        <div className="about-div">
          <div className="icon">
            <Image
              src="/study-abroad.png"
              alt="Global Placement"
              width={100}
              height={100}
            />
          </div>
          <h3 className="section-common-title">
            Global Placement
          </h3>
          <p>
            Global placement broadens opportunities, connecting talent worldwide with diverse markets, cultures, and career growth.
          </p>
        </div>

        {/* Handwritten Notes */}
        <div className="about-div">
          <div className="icon">
            <Image
              src="/writing-ideas.png"
              alt="Handwritten Notes"
              width={100}
              height={100}
            />
          </div>
          <h3 className="section-common-title">
            Handwritten Notes
          </h3>
          <p>
            Handwritten notes capture thoughts personally, enhancing memory, focus, creativity, and deeper connections with ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
