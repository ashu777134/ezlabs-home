import React from "react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section container">
      <div className="contact-left">
        <h2>Contact us</h2>
        <p>Have a project or question? Fill the form and we'll get back to you.</p>

        <ul className="contact-features">
          <li>Response within 24–48 hours</li>
          <li>Secure handling of contact details</li>
          <li>Available for prototypes & partnerships</li>
        </ul>
      </div>

      <div className="contact-right">
        <ContactForm />
      </div>
    </section>
  );
}
