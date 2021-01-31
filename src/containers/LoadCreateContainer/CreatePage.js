import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const CreatePage = ({allAnimals, setCurrentCharacter}) => {

  const handleClick = (animal) => {
    setCurrentCharacter(animal)
  }

  const animalArray = allAnimals.map(animal => {
    return(
      <div>
        <p>{animal.name}</p>
        <img src={animal.images[0]} alt="animal pic" width="200"></img>
        <form action="submit" onSubmit={handleClick}>
        <input type="button" value={animal} onChange={handleClick}/>
        <input type="submit" value="Submit comment"/>
        </form>
      </div>
    )
})

  
  

  return(
    <>
    <div>
        {animalArray}
    </div>
    <Link  from="/createpage" to="/character">
      <button type="button">
        Look after this pet
      </button>
    </Link>
    </>
  )
};

export default CreatePage;