
import { Link, useParams } from "react-router-dom"; 
import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer"; 
import { useEffect, useState } from "react";


export const SinglePlanets = (props) => {
  
 

 const [planetinfo, setPlanetinfo] = useState([])

  
  const { planetheId } = useParams()
  

  useEffect(()=>{
     fetch('https://www.swapi.tech/api/planets/' + planetheId)
        .then((response)=> response.json())
        .then((data)=> setPlanetinfo(data.result.properties))
   },[])
  
 

  return (
    <div className="container text-center">
     <div className="d-flex m-4">
          <div><img className="rounded" src="https://picsum.photos/800/600" alt="" /> </div>
          <div className="p-2 m-2"><h1 className="display-4 text-center m4">{planetinfo.name}</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos asperiores magni qui ut sapiente dolor delectus nobis molestiae velit nemo voluptatum, error accusamus explicabo eius dolore magnam quidem ratione voluptatibus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos asperiores magni qui ut sapiente dolor delectus nobis molestiae velit nemo voluptatum, error accusamus explicabo eius dolore magnam quidem ratione voluptatibus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos asperiores magni qui ut sapiente dolor delectus nobis molestiae velit nemo voluptatum, error accusamus explicabo eius dolore magnam quidem ratione voluptatibus.</p></div>
      </div>
        <ul className="d-flex justify-content-between text-center border-top">
            <li className="m-2">Climate:<br/>{planetinfo.climate}</li>
            <li className="m-2">Diameter:<br/>{planetinfo.diameter}</li>
            <li className="m-2">Gravity:<br/>{planetinfo.gravity}</li>
            <li className="m-2">Population:<br/>{planetinfo.population}</li>
            <li className="m-2">Rotation Period:<br/>{planetinfo.rotation_period}</li>
          </ul>
      <hr className="my-4" />  {/* A horizontal rule for visual separation. */}

    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
SinglePlanets.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
