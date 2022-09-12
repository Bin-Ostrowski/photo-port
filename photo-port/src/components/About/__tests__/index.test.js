//We need react to enable the components to function properly so we can test them.
import React from "react";
import { render, cleanup } from "@testing-library/react";
//The render function will do just what its name implies: "render" the component.
// What actually happens is that Jest creates a simulated DOM in a Node.js
//environment to approximate the DOM (no component is actually visibly rendered

//The cleanup function is used to remove components from the DOM to prevent memory leaking,
// as well as variable or data collisions between tests that could corrupt test results.

// import the extend-expect library from the jest-dom package.
import "@testing-library/jest-dom/extend-expect";
//jest-dom offers access to custom matchers that are used to test DOM elements.

//import the component we will be testing
import About from "..";

//call the cleanup function using the afterEach global function from Jest
//ensures after each test, we won't have any leftover memory data that could give false results.
afterEach(cleanup);

// use the describe function to declare the component we're testing
describe("About component", () => {
  // First Test verify that the component is rendering
  //test can also be used interchangeably with it to create a test.
  //In the first argument, a string declares what is being tested.
  //In the second argument, a callback function runs the test.
  it("renders", () => {
    render(<About />);
  });

  //Second Test compare snapshot versions of the DOM node structure.
  //A snapshot is a serialized version of the DOM node structure, enabled by Jest
  it("matches snapshot DOM node structure", () => {
    //render About
    //use the asFragment function, which returns a snapshot of the About componen
    const { asFragment } = render(<About />);
    //test and compare whether the expected and actual outcomes match.
    //expect function with a matcher to assert something about a value.
    //use toMatchSnapshot matcher to assert that snapshots will match
    expect(asFragment()).toMatchSnapshot();
  });
});
