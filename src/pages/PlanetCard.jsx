import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React from "react";
import { Link } from "react-router-dom";

export const PlanetCard = (planeta) => {
	const {store, dispatch} =useGlobalReducer()
    return (
        <div className="text-center">

           <div className="card m-4" style={{ width: "18rem" }}>
					<img src="https://picsum.photos/400/200" className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">{planeta.name}</h5>
						<p className="card-text">Item Id: {planeta.uid}</p>
						<Link to={'/singleplanets/'+ planeta.uid} className="btn btn-primary"> Learn More! </Link>

						<button className="btn btn-outline-warning m-2" onClick={()=> dispatch({
							type:'toggle_favitem',
							payload: planeta.name
							

						})


						}
						> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  						<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/></svg>
						</button>
					</div>
				</div>
        
           
        
        </div>
    );
}; 

export default PlanetCard