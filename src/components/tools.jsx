import Heading from "./customheading";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { tools } from "../Data";

export default function Tools() {
  return (
    <section className="py-4 !important">
      <Heading title={"Work "} primaryTitle={"Tools"} />
      <div className="grid grid-cols-5 gap-20 ml-5 md:ml-20 md:mr-28 max-[600px]:gap-6 max-[1024px]:gap-12">
        {tools.map(({ id, img }) => {
          return <img src={img} key={id} className="hover:-rotate-45" />;
        })}
      </div>
      <Link className="btn ml-9 md:ml-24" to={"/project"}>
         My Projects
         <span><FontAwesomeIcon icon={faArrowRight} /></span>
        </Link>
    </section>
  );
}
