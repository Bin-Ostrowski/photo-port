import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {

  //set the initial value of contactSelected to false. This is to prevent
  // the contact form from showing when a user initially navigates
  // to the homepage. The Gallery will display instead,
  const [contactSelected, setContactSelected] = useState(false);


  //lift the props to parent
  //initializing the category state as an array of a few objects
  //chose to use the useState hook here so that we can have the
  //option to change the categories at some point in the future
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        // conditional rendering
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* //conditional statement: if contactSelected is false render Gallery and About,
        else render ContactForm. shorthand condition is called a ternary operator, 
        identified with the ? and : symbols. ternary operator aenable conditional rendering,
         similar to && operator as short circuit. With the ternary, we supply the 
         false condition to render as well. */}
        {!contactSelected ? (
          // <> </> are called React fragments to allow multiple elements to be 
          //grouped together. Although in JSX you can only return a single 
          //parent element, this rule can be satisfied by wrapping the children 
          //components in a React fragment. This also allows you to wrap 
          //elements without creating extra DOM nodes, like wrapping with a <div> would do.
          <> 
          {/* conditional rendering
          //pass the current category, which is the category selected by the user,
           from the Gallery component */}
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
          
          </>
        ) : (

        <ContactForm></ContactForm>
        )}

      </main>
    </div>
  );
}

export default App;
