import React from "react";

// interface Course {
//   icon: string;
//   title: string;
//   description: string;
// }

const courses = [
  {
    icon: "fa-brands fa-css",
    title: "Learn CSS",
    description:
      "CSS styles web pages with colors, layouts, fonts, and animations, enhancing user experience and design.",
  },
  {
    icon: "fa-brands fa-html5",
    title: "Learn HTML",
    description:
      "HTML structures web content with headings, paragraphs, images, and links, forming the backbone of websites.",
  },
  {
    icon: "fa-brands fa-js",
    title: "Learn JavaScript",
    description:
      "JavaScript adds interactivity to websites, enabling dynamic content, user input handling, and real-time updates.",
  },
  {
    icon: "fa-brands fa-react",
    title: "Learn React",
    description:
      "React builds interactive UIs with reusable components, enabling fast rendering and seamless user experiences.",
  },
  {
    icon: "fa-brands fa-python",
    title: "Learn Python",
    description:
      "Python powers web development, data analysis, AI, and automation with its simple and readable syntax.",
  },
  {
    icon: "fa-brands fa-code",
    title: "Learn Database",
    description:
      "Master databases to store, query, and manage data efficiently for web apps and software solutions.",
  },
];

const CourseSection = () => {
  return (
    <section className="section-courses">
      <div className="major-container">
        <div className="container">
          <h1 className="section-common-heading">Explore All the course</h1>
          <p className="section-common-subheading">
            Discover a variety of courses in different categories.
          </p>
        </div>
        <div className="container grid grid-four-cols">
          {courses.map((course, index) => (
            <div className="course-div" key={index}>
              <div style={{fontSize : '4.5rem'}} className="icon">
                <i className={course.icon}></i>
              </div>
              <h3 className="section-common-title">{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
