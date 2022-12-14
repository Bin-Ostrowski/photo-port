import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  //define the categories in an array above the return statement.
  //Instead of just listing each category's name, we'll create objects that contain each category's name and a short description.
  //That way, we can use that same data elsewhere in the app.

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  //use the useEffect Hook by invoking the function
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
  //first argument is the callback function, and the second argument is an array with a
  //single element, currentCategory. The second argument directs the hook to re-render
  //the component on changes to the value of this state. In other words,
  //if currentCategory changes now, the component will re-render so that the change
  //in document.title will be visible to the use

  return (
    <header className="flex-row px-1">
      <h2>
        {/* //adding the logo to the navigation and the About and Contact sections.  */}
        {/* //reason we'll use a separate data-testid attribute specific for testing purposes 
        //instead of using the id attribute is the same as why we don't query an element
        // by its class: to follow the best-practice principle of separating concerns. */}
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            {/* //when About is selected, contactSelected is set to false,
             and the About component is rendered */}
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About Me
            </a>
          </li>
          {/* //Add Conditional Styling only style when contactSelected is ture
          we want to add the CSS class navActive
          use { } to contain the JavaScript expression, template literal to 
          interpolate the JavaScript statement*/}
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            {/* //set the value of contactSelected to true when selecting 
            he Contact item in the menu  */}
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {/* //map over the categories array*/}
          {/* Whenever we map over anything in JSX, the outermost element must have a key attribute 
          that's set to be something unique. This helps React keep track of items in the virtual DOM */}
          {categories.map((category) => (
            //short-circuit expression
            //navActive class value is assigned only if Contact hasn't been selected and the
            // current category HAS been selectede.
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && "navActive"
              }`}
              key={category.name}
            >
              {/* //Note also the use of parentheses in the map callback to return JSX. When you map over 
                //an array in a JSX expression, you should return only a single JSX element—like how you 
                //can only return a single element from a React component. */}

              {/* set up event listener to return category name when a category is clicked
                we'll use the built-in onClick() method */}
              {/* //In that case, let's wrap the categorySelected reference in an anonymous arrow function */}
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
              {/* //The onClick() attribute is expecting a callback function declaration. 
              It's important that we wrap it in a function declaration rather than just calling categorySelected(category.name), 
              which would cause the function to get called whenever the component renders as well. */}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
