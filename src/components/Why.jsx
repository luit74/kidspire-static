import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="section-why--choose">
      <div className="container">
        <h1 className="section-common-heading">Why Choose us ?</h1>
        <p className="section-common-subheading">
          Choose us for Holistic, enriching learning experience that empowers
          you to achieve your goals
        </p>
      </div>

      <div className="container grid grid-three-cols">
        {/* Left Column */}
        <div className="choose-left-div text-align-right">
          <div className="why-choose-div">
            <p className="common-text--highlight">1</p>
            <h3 className="section-common-title">Expert Instructors</h3>
            <p>
              Learn from the experienced teachers who are passionate about
              sharing knowledge and guiding you toward success in your learning
              journey.
            </p>
          </div>
          <div className="why-choose-div">
            <p className="common-text--highlight">3</p>
            <h3 className="section-common-title">Hand Written Notes</h3>
            <p>
              Learn from the experienced teachers who are passionate about
              sharing knowledge and guiding you toward success in your learning
              journey.
            </p>
          </div>
          <div className="why-choose-div">
            <p className="common-text--highlight">5</p>
            <h3 className="section-common-title">1 on 1 Doubt Sessions</h3>
            <p>
              Learn from the experienced teachers who are passionate about
              sharing knowledge and guiding you toward success in your learning
              journey.
            </p>
          </div>
        </div>

        {/* Center Column */}
        <div className="choose-center--div">
          <figure>
            <img
              src="./student.png"
              alt="Graduated Student"
            />
          </figure>
        </div>

        {/* Right Column */}
        <div className="choose-right-div text-align-left">
          <div className="why-choose-div">
            <p className="common-text--highlight">2</p>
            <h3 className="section-common-title">Online Support</h3>
            <p>
              Learn from the experienced teachers who are passionate about
              sharing knowledge and guiding you toward success in your learning
              journey.
            </p>
          </div>
          <div className="why-choose-div">
            <p className="common-text--highlight">4</p>
            <h3 className="section-common-title">Low Fees</h3>
            <p>
              Learn from the experienced teachers who are passionate about
              sharing knowledge and guiding you toward success in your learning
              journey.
            </p>
          </div>
          <div className="why-choose-div">
            <p className="common-text--highlight">6</p>
            <h3 className="section-common-title">Quality Education</h3>
            <p>
              Learn from the experienced teachers who are passionate about
              sharing knowledge and guiding you toward success in your learning
              journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
