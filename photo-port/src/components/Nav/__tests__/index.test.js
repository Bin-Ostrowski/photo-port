import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

//configure testing environment
afterEach(cleanup);

//declare what this test suite will be testing
describe("Nav component", () => {
  //baseline test
  it("renders", () => {
    render(<Nav />);
  });

  //snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

//emoji test
//describe function is not necessary for test to run; it's used to organize tests
// into sections labeled with the element being tested.
describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    //Arrange
    //query to return the element containing the emoji
    const { getByLabelText } = render(<Nav />);

    //Assert
    //querying the element by its aria-label
    expect(getByLabelText("camera")).toHaveTextContent("📸");
    //used a custom matcher to compare the expected value to the one received by our query.
  });
});

// Test for Link Visibility
describe("links are visible", () => {
  it("inserts text into the links", () => {
    // Arrange
    //add this data-testid attribute to any element for querying purposes,
    const { getByTestId } = render(<Nav />);

    // Assert
    //use getByTestId to assert the valid outcomes using the matcher, toHaveTextContent
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About Me");
    //This assert used two expect statements. both links must have their text contents inserted. 
    //If either assertion fails, test will fail. This is why an additional passing test rather 
    //than two additional tests. each it function is associated with a single test case.
  });
});
