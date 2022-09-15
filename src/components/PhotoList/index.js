import React, { useState } from "react";
import Modal from '../Modal';

//in the Photolist component, we can pass in the prop, so it will send to gallery
//however PhotoList, the props.category value has been passed down from Gallery as currentCategory.name
//Alternatively, we can destructure props, as {category}
const PhotoList = ({category}) => {

  const [photos] = useState([
    {
      name: "Grocery aisle",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Grocery booth",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Building exterior",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Restaurant table",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cafe interior",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cat green eyes",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Green parrot",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Yellow macaw",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Pug smile",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Pancakes",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Burrito",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Scallop pasta",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Burger",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Fruit bowl",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Green river",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Docks",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Panoramic village by sea",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Domestic landscape",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Park bench",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ]);

  //make it so only photos with the selected category appear
  //going through each photo in the photos array, trying to find every photo that matches 
  //the category that was selected by the user. If a photo matches the condition,
  // it is returned in an array and assigned to currentPhotos
  const currentPhotos = photos.filter((photo) => photo.category === category);

  //set initial state of isModalOpen to false, want it to to open 
  //when a user clicked on an image
  const [isModalOpen, setIsModalOpen] = useState(false)


  // define ToggleModal function
  const toggleModal =(image, i) => {
    //updated current photo state with data retrieved through click event.
    setCurrentPhoto({...image, index: i})
    //when the toggleModal function is executed, 
    //the value of isModalOpen is toggled from true to false
    setIsModalOpen(!isModalOpen);
  }

  //manage the current photo state and make this data accessible to the Modal component through props
const [currentPhoto, setCurrentPhoto] = useState();

  return (
    <div>
      {/* pass in currentPhoto and toggleModal as props to the Modal. use the short-circuit 
      AND operator, && conditionally render the modal based on 
      whether an image has been clicked using isModalOpen state */}
      {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal}/>}
      <div className="flex-row">
        {/* // map over the images in PhotoList(now filtered currentPhoto array)
         without having to import each one at the top */}
        {currentPhotos.map((image, i) => (
          <img
          //src was assigned the require expression. Though this isn't a common practice, 
          //it certainly has its use cases! We were also able to take advantage of 
          //the incremental naming of the images by using i
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            //alt attribute is used for accessibility user-assistance devices, such as screen readers, so the image's name was assigned
            alt={image.name}
            className="img-thumbnail mx-1"
            //assign a click handler function to capture the individual photo data
            //image object represents the element in the photos array, 
            //and the i will render the image
            onClick={() => toggleModal(image, i)}
            //key attribute was also assigned the image's name. This attribute value must be a unique string. 
            //absence of unique key value will cause an error message. 
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoList;
