import React from "react";
import PhotoList from '../PhotoList';
//Import the PhotoList component in Gallery.
import { capitalizeFirstLetter } from '../../utils/helpers';


//pass in currentCategory(a state from PhotoList)
function Gallery({ currentCategory }) {
  //then destructure the name and description properties from currentCategory.
  const { name, description } = currentCategory 
    
  return (
    //create page for current category by passing in destructured state key's
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      {/*getting category variable to work? First, we must use some prop
       drilling and pass down the currentCategory.name as a prop into the 
       Photolist component*/}
      <PhotoList category={currentCategory.name} />
    </section>
  );
}

export default Gallery;
