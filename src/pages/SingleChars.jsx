
import { Link, useParams } from "react-router-dom"; 
import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer"; 
import { useEffect, useState } from "react";


export const SingleChars = (props) => {
  
 

 const [characterinfo, setCharacterInfo] = useState([])

  
  const { chartheId } = useParams()
  

  useEffect(()=>{
     fetch('https://www.swapi.tech/api/people/' + chartheId)
        .then((response)=> response.json())
        .then((data)=> setCharacterInfo(data.result.properties))
   },[])
  
 

  return (
    <div className="container text-center">
      {/* Display the title of the todo element dynamically retrieved from the store using theId. */}
      
      <div className="d-flex m-4">
          <div><img className="rounded" src="https://picsum.photos/800/600" alt="" /> </div>
          <div className="p-2 m-2"><h1 className="display-4 text-center m4">{characterinfo.name}</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos asperiores magni qui ut sapiente dolor delectus nobis molestiae velit nemo voluptatum, error accusamus explicabo eius dolore magnam quidem ratione voluptatibus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos asperiores magni qui ut sapiente dolor delectus nobis molestiae velit nemo voluptatum, error accusamus explicabo eius dolore magnam quidem ratione voluptatibus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos asperiores magni qui ut sapiente dolor delectus nobis molestiae velit nemo voluptatum, error accusamus explicabo eius dolore magnam quidem ratione voluptatibus.</p></div>
      </div>
        <ul className="d-flex justify-content-between text-center border-top">
            <li className="m-2">Birth Year:<br/>{characterinfo.birth_year}</li>
            <li className="m-2">Gender:<br/>{characterinfo.gender}</li>
            <li className="m-2">Height:<br/>{characterinfo.height}</li>
            <li className="m-2">Eye Color:<br/>{characterinfo.eye_color}</li>
            <li className="m-2">Hair Color:<br/>{characterinfo.hair_color}</li>
          </ul>
      <hr className="my-4" />  {/* A horizontal rule for visual separation. */}

     
    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
SingleChars.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
