import { BrowserRouter, Route, Routes } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { CharCard } from "./CharCard.jsx";
import { PlanetCard } from "./PlanetCard.jsx";



export const Home = () => {

const [planet, setPlanet] = useState([])
const [characters, setCharacters] = useState([])


	 
  const {store, dispatch} =useGlobalReducer()

 useEffect(()=>{
   fetch('https://www.swapi.tech/api/planets/')
        .then((response)=> response.json())
        .then((data)=> setPlanet(data.results)),
	fetch('https://www.swapi.tech/api/people/')
        .then((response)=> response.json())
        .then((data)=> setCharacters(data.results))
		
    },[])

	return (
		<>
		<div>
			<h2 className="m-2">Characters</h2>
			<div  className="d-flex overflow-scroll">
				{characters.map((char)=> <CharCard key={char.uid} uid={char.uid} name= {char.name}/> )}
			</div>
		</div>

		<div >
			<h2 className="m-2">Planets</h2>
			<div className="d-flex overflow-scroll">
				{planet.map((planeta)=> <PlanetCard key={planeta.uid} uid={planeta.uid} name= {planeta.name}/> )}
			</div>
		</div>

		
		</>
	);
}; 