import React, {useState} from "react";
import DisplayAllCharacters from '../../components/LoadCreateComponents/DisplayAllCharacters'
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const LoadPage = ({userAnimals, selectCurrentCharacter}) => {

  if(!userAnimals){
    return (
      <h1>You don't have any animals yet!</h1>
    )
  }


  const characters = userAnimals.map((animal) => {
    return (
    <>
      <DisplayAllCharacters animal={animal} key={animal.id}/>
      <Link  from="/loadpage" to="/character" key={animal.id}>
          <button type="button" onClick={() => selectCurrentCharacter(animal.id)}>
              Look after your pet
          </button>
      </Link>
      
    </>)
  })

  
  

  return(
    <div>
    <h1>Your Pets</h1>
    {characters}
  </div>
  )
};

export default LoadPage;