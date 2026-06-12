"use client";

import React, { useRef } from "react";
import "./CSS/ContactMe.css";
import { handleContactForm } from "./actions";

const ContactMe = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const result = await handleContactForm(formData);

    if (result.success) {
      alert("Message sent successfully! 🚀");
      formRef.current?.reset(); 
    } else {
      alert(`Oops! Something went wrong: ${result.message}`);
    }
  };

  return (
    <div id="contact-section" className="contact-form-container">
      <h6 data-aos="fade-up">Contact Me</h6>
      
      <form ref={formRef} action={handleSubmit}>
        <input
          type="text"
          name="name"
          aria-label="name-field"
          placeholder="Name"
          required
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <input
          type="email"
          name="email"
          aria-label="email"
          placeholder="Email"
          required
          data-aos="fade-up"
          data-aos-delay="150"
        />
        <textarea
          name="message"
          id="message"
          aria-label="message"
          placeholder="Message"
          required
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <button data-aos="fade-up" data-aos-delay="250" type="submit">
          Submit Message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;