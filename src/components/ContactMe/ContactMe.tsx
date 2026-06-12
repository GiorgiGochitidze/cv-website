"use client";

import React, { useRef, useState } from "react";
import "./CSS/ContactMe.css";

const ContactMe = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "ea30ef72-044a-42f3-92bd-a1c2fc8552e9");
    formData.append("from", "Giorgi Gochitidze");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("Message sent successfully! 🚀");
        formRef.current?.reset(); 
      } else {
        alert(
          `Oops! Something went wrong: ${data.message || "Submission rejected."}`,
        );
      }
    } catch {
      alert("Network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-section" className="contact-form-container">
      <h6 data-aos="fade-up">Contact Me</h6>

      <form ref={formRef} onSubmit={handleSubmit}>
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
        <button
          data-aos="fade-up"
          data-aos-delay="250"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
