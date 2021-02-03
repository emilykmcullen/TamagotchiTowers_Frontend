import React, {useEffect, useState} from "react";
import DisplayAllCharacters from '../../components/LoadCreateComponents/DisplayAllCharacters'
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const LoadPage = ({userAnimals, selectCurrentCharacter, getUserData, getAllAnimalData, setLoaded, loaded}) => {


  useEffect(() => {
    getUserData()
    setLoaded(true)
  }, [])

  useEffect(() => {
    getAllAnimalData()
  }, [userAnimals])

  if(!userAnimals){
    return (
      <h1>You don't have any animals yet!</h1>
    )
  }

  if (loaded === false){
      return(
        <img src="../src/gifs/loading.gif" alt=""/>
      )
    }


  const characters = userAnimals.map((animal) => {
    return (
    <div key={animal.id}>
      <DisplayAllCharacters animal={animal} />
      <Link  from="/loadpage" to="/character" >
          <button type="button" onClick={() => selectCurrentCharacter(animal.id)}>
              Look after your pet
          </button>
      </Link>
      
    </div>)
  })

  
  

  return(
    <div>
    <h1>Your Pets</h1>
    {characters}
  </div>
  )
};

export default LoadPage;