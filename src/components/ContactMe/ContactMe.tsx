"use client";

import React from "react";
import "./CSS/ContactMe.css";
import { handleContactForm } from "./actions";

const ContactMe = () => {
  return (
    <div className="contact-form-container">
      {/* Directly connect the form to server action */}
        <h6>Contact Me</h6>
      <form action={handleContactForm}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" id="message" placeholder="Message" required />
        <button type="submit">Submit Message</button>
      </form>
    </div>
  );
};

export default ContactMe;
