import React from "react";

function Nav() {
  //define the categories in an array above the return statement.
  //Instead of just listing each category's name, we'll create objects that contain each category's name and a short description.
  //That way, we can use that same data elsewhere in the app.
  const categories = [
    {
      name: "Comercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      name: "Portraits",
      description: "Portraits of people in my life",
    },
    {
      name: "Food",
      description: "Delicious delicacies",
    },
    {
      name: "Landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  //we've provided a function name to onClick(),
  // we need to define it somewhere above the return statement
  function categorySelected(name) {
    console.log(`${name} clicked`);
  }

  return (
    <header className="flex-row">
      <h2>
        {/* //adding the logo to the navigation and the About and Contact sections.  */}
        <a href="/">
          <span role="img" aria-label="camera"> 📸</span>Oh Snap!
          </a>
      </h2>
      <nav>
      <ul className="flex-row">
      <li className="mx-2">
            <a href="#about">About Me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {/* //map over the categories array*/}
          {/* Whenever we map over anything in JSX, the outermost element must have a key attribute 
          that's set to be something unique. This helps React keep track of items in the virtual DOM */}
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              {/* //Note also the use of parentheses in the map callback to return JSX. When you map over 
                //an array in a JSX expression, you should return only a single JSX element—like how you 
                //can only return a single element from a React component. */}

              {/* set up event listener to return category name when a category is clicked
                we'll use the built-in onClick() method */}
              {/* //In that case, let's wrap the categorySelected reference in an anonymous arrow function */}
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
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
