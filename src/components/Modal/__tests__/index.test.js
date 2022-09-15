import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

//mock a function that will replace the toggleModal function
const mockToggleModal = jest.fn();

// declare a constant,currentPhoto, that's assigned one element of hardcoded
//values from the PhotoList array photos. include the index: 1 value in this
//object, because it is necessary to render the image in the modal
const currentPhoto = {
  name: "Park bench",
  category: "landscape",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  index: 1,
};

//configure testing environment
afterEach(cleanup);

//declare what this test suite will be testing
describe("Modal component", () => {
  //baseline test
  it("renders", () => {
    render(
      <Modal
        //Now that the props have been declared properly, we can use these
        // mock functions as props
        currentPhoto={currentPhoto}
        toggleModal={mockToggleModal}
      />
    );
  });

  //snapshot test
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(
      <Modal currentPhoto={currentPhoto} toggleModal={mockToggleModal} />
    );
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });

  //click event executes click handler
  describe("Click Event", () => {
    it("calls onClose handler", () => {
      //Arrange: Render Modal
      const { getByText } = render(
        <Modal 
        onClose={mockToggleModal} 
        currentPhoto={currentPhoto} 
        />
      );
      //Act: Simulate click event
      fireEvent.click(getByText('Close this modal'));

      //Asset: Expected matcher
      expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
  });
});
