import React, { useState } from "react";

//create ContactForm
function ContactForm() {
    //add the Hook that'll manage the form data,
    //set the initial state to empty strings
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    
    //destructure the formState object into its named 
    //properties, name, email, and message
    const {name, email, message} = formState;

    //define handleChange function to sync internal state of component
    // formState with user input from the DOM. The onChange event listener 
    //will ensure that the handleChange function fires whenever a keystroke
    // is typed into the input field
    function handleChange(e) {
        //use setFormState function to update formState value. assign value taken
        // from the input field in the UI with e.target.value and assign value to
        // the property formState. use spread operator, ...formState, to retain 
        //the other key-value pairs in this object. Without spread operator, 
        //formState object would be overwritten to only contain one value key 
        //pair instead of all three.
        setFormState({ ...formState, [e.target.name]: e.target.value })
        //changing name: to [e.target.name]
        //The name property of target actually refers to the name attribute 
        //of the form element. This attribute value matches the property names
        // of formState (name, email, and message) and allows us to use [ ] 
        //to create dynamic property names.
    };

    //to test, console.log(formState) would go outside of function.

    //declare handleSubmit function
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          {/* //Due to keywords reserved in JavaScript, we need to replace the
             for attribute in the <label> element to htmlFor */}
          <label htmlFor="name">Name:</label>
          {/* //assign the initial state, which are empty strings, to the defaultValue.*/}
          {/* add the attribute onChange to the <input> element, and assign a 
          function called handleChange */}
          <input type="text" name="name" defaultValue={name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
