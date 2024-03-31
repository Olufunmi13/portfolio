//import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section className="container">
      <div className="mx-5 flex align-middle justify-center flex-col font-display md:p-16 ">
        <p>
          Hi there <span className=" absolute ml-1 animate-wave">👋</span>
        </p>
        <h1 className="text-4xl  text-[var(--color-primary)] font-normal ">
          I&apos;m Oluwatuyi Olufunke{" "}
        </h1>
        <p className=" text-left pt-2 text-2xl md:w-2/4  ">
          A frontend developer, specialized in creating user-friendly,
          responsive and accessible websites.
        </p>
        <Link className="btn" to={"/about"}>
        About Me
        <span><FontAwesomeIcon icon={faArrowRight} /></span>
        </Link>
      </div>
    </section>
  );
};

export default Home;

//  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//     <path
//       fill="var(--color-light)"
//       fillOpacity="1"
//       d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,202.7C672,235,768,245,864,224C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//     ></path>
//   </svg> 
