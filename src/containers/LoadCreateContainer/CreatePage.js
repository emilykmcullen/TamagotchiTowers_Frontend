import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";


const CreatePage = ({allAnimals, userData, handleAdoptAnimal, currentCharacter, setCurrentCharacter, setHasSelectedCharacter, getUserData, setLoaded, userDataLoaded, getAllAnimalData, getUsersAnimals}) => {


  const [formData, setFormData] = useState({
    name: '',
    animaltype: ''
  });


  const handleClick = (animal) => {
    formData.animaltype = animal.animal
    
    
    // if (!userData && loggedInUsername){
    //   console.log("Saving new user");
    // }
  }

  const handleChange = (event) => {
    const newState = {...formData};
    newState[event.target.name] = event.target.value;
    setFormData(newState);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    saveNewAnimal(formData)
    // getUserData()
  }

  const animalArray = allAnimals.map((animal, index) => {
    return(
      
      <div className="animal_container" key={index}>
        <p className="animal_type">{animal.animal} </p>
        <img src={animal.image[0]} alt="animal pic" width="200"></img>
        <button id="choose_animal_button" onClick={() => handleClick(animal)} >Adopt</button>
      </div>
    )
})



const saveNewAnimal = (data) => {
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
      
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        animalName: data.name,
        animalType: data.animaltype,
        health: 100,
        happiness: 100,
        cleanliness: 100,
        fitness: 100,
        hunger: 100,
        user: {
          id: userData[0].id,
          userName: userData[0].userName,
          password: userData[0].password,
          imageURL: userData[0].imageURL}
      })
  };
  return fetch('http://localhost:8080/api/animals', requestOptions)
  .then(setHasSelectedCharacter(true))
  .then(() => setLoaded(true))
  .then(getUserData())
  .then(getAllAnimalData())
  .then(getUsersAnimals())
  
  
}

if(userDataLoaded === false){
  return <p>Loading....</p>
}

  
  

  return(
    <>
    <div className="animal_array_container">
        {animalArray}
    </div>
    <div className="link_container">
  
      <form>
        <label htmlFor="name"></label>
          <input 
            onChange={handleChange}
            name="name"
            id="name"
            type="text"
            value={formData.name}
            placeholder="Enter name"/>
          <input type="hidden" id="animaltype" name="animaltype" value={formData.animaltype} onChange={handleChange}></input>
          <input type="submit" value="Look after this pet" onClick={handleSubmit}/>
        </form>
    </div>
    </>
      )
};

export default CreatePage;