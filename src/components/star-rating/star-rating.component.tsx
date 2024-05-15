import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './star-rating.styles.css'


export default function StarRating({ numOfStars }) {
    const [stars, setStars] = useState(0); // starts with 0 stars
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex) {
        setStars(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)

    }

    function handleMouseLeave(){
        setHover(stars) // when the mouse leaves you are setting the stars equal to the last selection

    }

  return (
    <div className="star-rating">
      {
        // creates an array with a length specified by numOfStars, which in this case is 5. 
        // All elements in this newly created array are undefined because no values are initially assigned.

        // The spread operator ... is used to expand the elements of the created array into a new array. 
        // This step effectively copies the contents of the original array into a new array structure.
        // new array now allows full array functionality

        // _ (underscore): This parameter acts as a placeholder for the elements of the array, which are undefined. 
        // The underscore is commonly used to indicate that a parameter is not used in the computation.
        
        // index: This parameter represents the current index of the element within the array. 
        // Starting from 0 and going up to numOfStars-1.

        // the stars attributes are then defined and the functions are assigned to each event.

        
        [...Array(numOfStars)].map((_, index) => {
            index += 1; // ex. if numOfstars is 5 then

            return <FaStar 
                className={index <= (hover || stars) ? 'active' : 'inactive'}
                key={index} 
                onClick={() => handleClick(index)} 
                onMouseMove={() => handleMouseEnter(index)} 
                onMouseLeave={() => handleMouseLeave()}
                size={40} 
            />;
        })
      }
    </div>
  );
}
