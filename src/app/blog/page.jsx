"use client";
import Image from "next/image";
import { FaCalendar, FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const blogPosts = [
    {
      img: "/pexels-andrew-5821296.jpg",
      date: "Sept 12, 2023",
      title: "Stock Market Have been crashed all around the world",
    },
    {
      img: "/pexels-vlada-karpovich-5357332.jpg",
      date: "Sept 12, 2023",
      title: "Stock Market Have been crashed all around the world",
    },
    {
      img: "/pexels-leeloothefirst-7873572.jpg",
      date: "Sept 12, 2023",
      title: "Stock Market Have been crashed all around the world",
    },
    {
      img: "/pexels-andrew-5821296.jpg",
      date: "Sept 12, 2023",
      title: "Stock Market Have been crashed all around the world",
    },
  ];

  return (
    <section className="section-blog">
      <div className="container">
        <h2 className="section-common-heading">Explore Our Blogs</h2>
        <p className="section-common-subheading">
          Explore Our Blogs for Insightful articles, tips and updates on the world of education,
          skill development, and personal growth
        </p>
      </div>

      <div className="container grid grid-four-cols">
        {blogPosts.map((blog, index) => (
          <div className="blog" key={index}>
            <figure>
              <Image
                src={blog.img}
                alt={`Blog Image ${index + 1}`}
                width={300}
                height={200}
                style={{ width: "90%", height: "auto" }}
              />
            </figure>
            <div className="card-content">
              <div className="second-line flex">
                <div className="second-line-chunks flex">
                  <FaCalendar />
                  <p>{blog.date}</p>
                </div>
                <FaArrowRight />
              </div>
              <h2 className="cards-title">{blog.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
