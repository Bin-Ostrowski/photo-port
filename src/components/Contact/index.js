import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

//create ContactForm
function ContactForm() {
  //add the Hook that'll manage the form data,
  //set the initial state to empty strings
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //destructure the formState object into its named
  //properties, name, email, and message
  const { name, email, message } = formState;

  //use the useState Hook to handle the error state
  const [errorMessage, setErrorMessage] = useState("");

  //define handleChange function to sync internal state of component
  // formState with user input from the DOM. The onChange event listener
  //will ensure that the handleChange function fires whenever a keystroke
  // is typed into the input field
  function handleChange(e) {
    //add validation allowing validation of the form data before
    //syncing form data with the state, formState
    //conditional statement says if the <input> is email, then validate
    //the value of that input field with the validateEmail function and
    // assign its return to isValid
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    //use setFormState function to update formState value. assign value taken
    // from the input field in the UI with e.target.value and assign value to
    // the property formState. use spread operator, ...formState, to retain
    //the other key-value pairs in this object. Without spread operator,
    //formState object would be overwritten to only contain one value key
    //pair instead of all three.
    setFormState({ ...formState, [e.target.name]: e.target.value });
    //changing name: to [e.target.name]
    //The name property of target actually refers to the name attribute
    //of the form element. This attribute value matches the property names
    // of formState (name, email, and message) and allows us to use [ ]
    //to create dynamic property names.

    //state only updates if the form data has passed the validations
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  //to test, console.log(formState) would go outside of function.

  //declare handleSubmit function
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1 data-testid="h1Contact" >Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          {/* //Due to keywords reserved in JavaScript, we need to replace the
             for attribute in the <label> element to htmlFor */}
          <label htmlFor="name">Name:</label>
          {/* //assign the initial state, which are empty strings, to the defaultValue.*/}
          {/* add the attribute onBlur to the <input> element, and assign a 
          function called handleChange */}
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {/* //if errorMessage has a truthy value,  render div message.
        && operator—known as the AND operator—is being used here as a 
        short circuit. If the first value resolves to true, 
        the second expression is evaluated.  */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" data-testid="button" >Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
