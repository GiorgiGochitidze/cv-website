"use client";

import React from "react";
import "./CSS/ContactMe.css";
import { handleContactForm } from "./actions";

const ContactMe = () => {
  return (
    <div id="contact-section" className="contact-form-container">
      {/* Directly connect the form to server action */}
        <h6>Contact Me</h6>
      <form action={handleContactForm}>
        <input type="text" name="name" aria-label="name-field" placeholder="Your Name" required />
        <input type="email" name="email" aria-label="email" placeholder="Your Email" required />
        <textarea name="message" id="message" aria-label="message" placeholder="Message" required />
        <button type="submit">Submit Message</button>
      </form>
    </div>
  );
};

export default ContactMe;
