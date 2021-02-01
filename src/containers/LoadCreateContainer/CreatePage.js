import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";


const CreatePage = ({allAnimals, setCurrentCharacter, userData, loggedInUsername, loggedInPassword, currentCharacter, getUserData}) => {


  const handleClick = (animal) => {
    setCurrentCharacter(animal)
    // if (!userData && loggedInUsername){
    //   console.log("Saving new user");
    //   saveNewUser();
      // getUserData();
    }
  


  const animalArray = allAnimals.map(animal => {
    return(
      <div className="animal_container">
        <p>{animal.name}</p>
        <img src={animal.main_image} alt="animal pic" width="200"></img>
        <button id="choose_animal_button" onClick={() => handleClick(animal)}>{animal.name}</button>
      </div>
    )
})



const saveNewAnimal = () => {
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
      
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        animalName: currentCharacter.name,
        animalType: currentCharacter.type,
        health: currentCharacter.health,
        happiness: currentCharacter.happiness,
        cleanliness: currentCharacter.cleanliness,
        fitness: currentCharacter.fitness,
        hunger: currentCharacter.hunger,
        user: {
          id: 5,
          userName: userData.userName,
          password: userData.password,
          imageURL: userData.imageURL
                },
        images: [],
        appetite: 0.05,
        grooming: 0.06,
        cheeriness: 0.02,
        activityLevel: 0.09
      })
  };
  return fetch('http://localhost:8080/api/animals', requestOptions)
}

  
  

  return(
    <>
    <div className="animal_array_container">
        {animalArray}
    </div>
    <div className="link_container">
    <Link  from="/createpage" to="/character">
      <button type="button" onClick={saveNewAnimal}>
        Look after this pet
      </button>
    </Link>
    </div>
    </>
  )
};

export default CreatePage;