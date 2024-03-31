import "../App.css";
import Heading from "./customheading";
import { blogs } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <section className="container">
      <Heading title={"My "} primaryTitle={"Articles"} />
      <p className="px-5 text-2xl pb-8">
        I create articles that I would find interesting to read when learning
        something new or trying to enhance a skill. Below are some recent
        examples of my work:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:mx-24 lg:grid-cols-3 gap-4">
        {blogs.map((item) => {
          return (
            <div key={item.id} className="bg-white rounded-lg shadow-md">
              <div className=" h-[200px] overflow-hidden">
                <a
                  href={item.site}
                  target="_blank"
                  rel="noopener"
                  className="no-underline"
                >
                  <img
                    src={item.img}
                    alt={item.articleTitle}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <div className="p-4">
                <div>
                  <a
                    href={item.site}
                    target="_blank"
                    rel="noopener"
                    className="no-underline uppercase text-[#9ca3af] text-sm transition-[text]"
                  >
                    {item.articleSite}
                  </a>
                </div>
                <h3 className="text-xl font-semibold">
                  <a
                    href={item.site}
                    target="_blank"
                    rel="noopener"
                    className="no-underline text-[var(--color-primary)]"
                  >
                    {item.articleTitle}
                  </a>
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Link className="btn ml-9 md:ml-24" to={"/contact"}>
            Get in touch 
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
    </section>
  );
}
