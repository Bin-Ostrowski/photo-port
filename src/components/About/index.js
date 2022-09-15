import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return(
         //React components must always return a single parent JSX element.
         //However, this element may have many children elements.
         //To do so, we need to call the class attribute className
         //because class is already a keyword in JavaScript
        <section className ="my-5">
            <h1 id="about">Who am I?</h1>
            {/* You've seen template literals and handlebars {} used to employ JavaScript 
            in strings or HTML. This is one more flavor of JavaScript in HTML.
            In addition to referencing variables, you can also use JavaScript expressions. */}
            <img src={coverImage} className="my=2" style ={{ width: "100%" }} alt="cover" />
        </section>
    )
};

export default About;