import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
import "../App.css";
import Heading from "./customheading";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Tools from "./tools";

export default function about() {
  return (
    <section className="container ">
      <Heading title={"About "} primaryTitle={"Me"} />
      <div className="flex flex-col  md:flex-row">
        <div>
          <img
            src="src\assets\oluwatuyi.jpg"
            alt="profile"
            className="w-full md:mx-5 rounded shadow-2xl"
          />
        </div>
        <div className=" mt-7 mx-5 font-display md:p-5 md:mt-16 md:mx-14">
          <p className="md:w-4/5">
            I translate ideas into impactful digital experiences. With a passion
            for exquisite design and user-centric journeys, I craft clean,
            responsive web applications that elevate brands and empower users.
          </p>
          <p className="md:w-4/5">
            Cutting-edge technologies, meticulous attention to detail, and a
            commitment to clear communication make me a valuable asset for any
            team building innovative digital products. 
          </p>
          <b>Let&apos;s collaborate and turn your vision into reality.</b>
          <a href="" download className="btn ">
            Download CV{" "}
            <span>
              <FontAwesomeIcon icon={faDownload} />
            </span>
          </a>
        </div>
      </div>
      <Tools />
    </section>
  );
}
