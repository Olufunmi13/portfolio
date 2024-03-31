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

  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const isValid = emailRegex.test(formState.email);
    setIsFormValid(isValid && formState.name && formState.message);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const config = {
        SecureToken: "d2b03607-200d-4f29-8533-c0fcfbd5d237",
        To:formState.email,
        From: "helloolufunke@gmail.com",
        Subject: "This is from your Contact Form",
        Body: `${formState.name} has sent you a message from your portfolio. Here is the message: ${formState.message}`,
      };
      if (window.Email) {
        console.log(window.Email);
        window.Email.send(config).then((message) => {
          alert(message);
        }
        ,setFormState({
          name: '',
          email: '',
          message: '',
        })
        );
      }
      
    }
  };

  return (
    <section className="container">
      <Heading title={"Contact "} primaryTitle={"Me"} />
      <p className="mx-10 md:mx-20 md:w-4/5">
      I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
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
          className="p-4 my-4 w-[70%] border-2 rounded-md focus:shadow-inner text-black"
          onChange={changeHandler}
          value={formState.name || ""}
        />
        <span><i className="text-[#9ca3af]"> Please endeavour to input a valid email</i></span>
        <input
          type="email"
          name="email"
          placeholder=" Email"
          className="p-4 my-4 w-[70%] border-2 rounded-md focus:shadow-inner text-black"
          onChange={changeHandler}
          value={formState.email || ""}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          className="p-4 my-4 w-[70%] border-2 rounded-md focus:shadow-inner resize-none text-black"
          onChange={changeHandler}
          value={formState.message || ""}
        />
        <button
          type="submit"
          disabled={!isFormValid} // Disable the button if the form is not valid
          className={`bg-[var(--color-primary)] w-1/5 rounded text-[var(--color-white)] p-2 hover:text-[var(--color-primary)] hover:bg-white hover:border-2 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Send
        </button>
      </form>
    </section>
  );
};
// 3WGD7L54MDDUL5YD5E5QWZQM
//helloolufunke@gmail.com
//427433 - backupcode

export default Contact;
