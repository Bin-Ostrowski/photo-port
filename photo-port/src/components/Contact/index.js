import React from "react";

//create ContactForm
function ContactForm() {
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form">
        <div>
          {/* //Due to keywords reserved in JavaScript, we need to replace the
             for attribute in the <label> element to htmlFor */}
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
