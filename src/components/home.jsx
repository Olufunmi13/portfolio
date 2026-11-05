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


