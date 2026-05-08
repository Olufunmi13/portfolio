import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedinIn,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import "../App.css";
import Heading from "./customheading";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const changeHandler = (e) => {
    const newState = {
      ...formState,
      [e.target.name]: e.target.value,
    };
    setFormState(newState);

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const isValid = emailRegex.test(newState.email);
    setIsFormValid(isValid && newState.name.trim() !== "" && newState.message.trim() !== "");
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "b3b34379-ec47-40ce-9ed2-93a1042a4b53",
            name: formState.name,
            email: formState.email,
            message: formState.message,
            subject: "New Contact Form Submission from Portfolio",
          }),
        });
        
        const result = await response.json();
        
        if (result.success) {
          setShowModal(true);
          setFormState({
            name: "",
            email: "",
            message: "",
          });
          setIsFormValid(false);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred while sending the message.");
      }
    }
  };

  return (
    <section className="container">
      <Heading title={"Contact "} primaryTitle={"Me"} />
      <p className="mx-10 md:mx-20 md:w-4/5 text-center">
        I would love to hear about your project and how I could help. Please
        fill in the form, and I’ll get back to you as soon as possible.
      </p>
      <form
        method="post"
        encType="text/plain"
        onSubmit={submitHandler}
        className="flex flex-col items-center justify-center"
      >
        <input
          type="text"
          name="name"
          placeholder=" Full Name"
          className="p-4 my-4 w-[70%] border-2 rounded-md focus:shadow-inner bg-transparent text-[var(--color-dark)]"
          onChange={changeHandler}
          value={formState.name || ""}
          required
        />
        <span>
          <i className="text-[#9ca3af]">
            {" "}
            Please endeavour to input a valid email
          </i>
        </span>
        <input
          type="email"
          name="email"
          placeholder=" Email"
          className="p-4 my-4 w-[70%] border-2 rounded-md focus:shadow-inner bg-transparent text-[var(--color-dark)]"
          onChange={changeHandler}
          value={formState.email || ""}
          required
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          className="p-4 my-4 w-[70%] border-2 rounded-md focus:shadow-inner resize-none bg-transparent text-[var(--color-dark)]"
          onChange={changeHandler}
          value={formState.message || ""}
          required
        />
        <button
          type="submit"
          disabled={!isFormValid} // Disable the button if the form is not valid
          className={`bg-[var(--color-primary)] w-1/5 rounded text-[var(--color-white)] p-2 hover:text-[var(--color-primary)] hover:bg-white hover:border-2 ${
            !isFormValid ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Send
        </button>
      </form>
      <div className="flex gap-2 pt-4">
        <a className="hover:bg-[var(--color-primary)] 
         border-[var(--color-primary)] rounded-full border-2 p-2" href="https://www.linkedin.com/in/Olufunke-Oluwatuyi-8248141a1/" target="_blank">
         <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a className="hover:bg-[var(--color-primary)] border-[var(--color-primary)] rounded-full border-2 p-2" href="https://twitter.com/funmike_os" target="_blank">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a  className="hover:bg-[var(--color-primary)] border-[var(--color-primary)] rounded-full border-2 p-2" href="https://github.com/Olufunmi13" target="_blank">
         <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-[var(--color-body)] border-2 border-[var(--color-primary)] p-8 rounded-lg shadow-xl text-center max-w-sm w-11/12">
            <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">Message Sent!</h3>
            <p className="mb-6 text-[var(--color-dark)] text-lg">Thank you for reaching out. I'll get back to you as soon as possible!</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-[var(--color-primary)] text-[var(--color-white)] px-8 py-2 rounded hover:bg-white hover:text-[var(--color-primary)] border-2 border-transparent hover:border-[var(--color-primary)] transition-all font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
// 3WGD7L54MDDUL5YD5E5QWZQM
//helloolufunke@gmail.com
//427433 - backupcode

export default Contact;
