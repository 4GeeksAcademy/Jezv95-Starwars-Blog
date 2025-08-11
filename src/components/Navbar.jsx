import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; 
export const Navbar = () => {



   const {store, dispatch} =useGlobalReducer()
	return (
		 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/">
    <div className="navbar-brand"><img src="https://d2i9ogginaqdr5.cloudfront.net/cmsstatic/lego-star-wars-256.png"alt="Logo Satr Wars" className="logo-sw"/></div>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
      </ul>
    </div>
  

		<div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites <span className="badge text-bg-secondary"> {store.favItems.length} </span>
  </button>
  <ul className="dropdown-menu">
    {store.favItems.map((favorite,index)=><li key={index} className="dropdown-item">
      {favorite} <span > <button type="button" onClick={()=> dispatch({
        type:'toggle_favitem',
				payload: favorite
      })} class="btn"> X </button> </span>
      </li>)}
  
  </ul>
</div>
</div>
</nav>
	);
};