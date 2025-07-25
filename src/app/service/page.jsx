"use client";
import { FaCss3, FaHtml5, FaReact, FaJs, FaPython, FaCode } from "react-icons/fa";

const Service = () => {
  const services = [
    {
      icon: <FaCss3 />,
      title: "Learn CSS",
      description:
        "CSS styles web pages with colors, layouts, fonts, and animations, enhancing user experience and design.",
    },
    {
      icon: <FaHtml5 />,
      title: "Learn HTML",
      description:
        "HTML structures web content with headings, paragraphs, images, and links, forming the backbone of websites.",
    },
    {
      icon: <FaJs />,
      title: "Learn JavaScript",
      description:
        "JavaScript adds interactivity to websites, enabling dynamic content, user input handling, and real-time updates.",
    },
    {
      icon: <FaReact />,
      title: "Learn React",
      description:
        "React builds interactive UIs with reusable components, enabling fast rendering and seamless user experiences.",
    },
    {
      icon: <FaPython />,
      title: "Learn Python",
      description:
        "Python powers versatile applications, from web development to AI, with simple syntax and robust libraries.",
    },
    {
      icon: <FaCode />,
      title: "Learn Database",
      description:
        "Databases store, manage, and retrieve data efficiently for modern web applications and large-scale systems.",
    },
  ];

  return (
    <section className="section-courses">
      <div className="major-container">
        <div className="container">
          <h1 className="section-common-heading">Explore All the Courses</h1>
          <p className="section-common-subheading">
            Discover a variety of courses in different categories.
          </p>
        </div>

        <div className="container grid grid-four-cols">
          {services.map((service, index) => (
            <div className="course-div" key={index}>
              <div className="icon">{service.icon}</div>
              <h3 className="section-common-title">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
