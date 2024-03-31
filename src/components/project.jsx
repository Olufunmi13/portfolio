import "../App.css";
import Heading from "./customheading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { portfolio } from "../Data";
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <section className="container ">
        <Heading title={"Featured "} primaryTitle={"Projects"} />
        <div className=" mx-10 md:mx-20 md:w-4/5">
          {portfolio.map((item) => {
            return (
              <div key={item.id} className="flex gap-4 flex-col mb-16 md:flex-row md:mb-12 md:even:flex-row-reverse">
                <div>
                  <a href={item.site} target="_blank" rel="noopener" className="no-underline" title={item.name}>
                    <img
                      src={item.img}
                      alt={item.name}
                      width={720}
                      height={340}
                      className="block w-full max-w-sm md:max-w-md h-auto object-cover object-top opacity-[0.8] aspect-auto brightness-50 grayscale-1 duration-1000 cursor-pointer hover:filter-none hover:opacity-100 hover:grayscale-0"
                    />
                  </a>
                </div>
                <div className="w-full md:w-6/12 md:ml-12">
                    <h3 className="text-[var(--color-primary)] text-xl md:text-2xl uppercase mb-4 mt-0 font-bold text-nowrap"><a href={item.site} target="_blank" className=" text-inherit no-underline">{item.name}</a> </h3>
                  <p className="text-base md:text-2xl mx-0 my-2">{item.desc}</p>
                  <ul className="flex gap-5 m-0 py-4 list-disc list-inside sm:p-4">
                    {item.tag.split(", ").map((tag, index) => {
                      return <li key={index} className="uppercase text-xs !list-item ">{tag}</li>;
                    })}
                  </ul>
                  <button className="inline-block border-2  border-solid border-[#ececeb] bg-transparent uppercase text-sm px-[1.5em]
                   py-[1em] transition-[var(--transition] hover:bg-[#f37a17] hover:text-white">
                  <a href={item.site} target="_blank">Visit Site</a>
                  </button>
                </div>
              </div>
            );
          })}
          
        </div> 
        <Link className="btn ml-9 md:ml-24" to={"/blog"}>
            My articles
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
    </section>
  );
}

