import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";


const CreatePage = ({allAnimals, setCurrentCharacter, userData, loggedInUsername, loggedInPassword, currentCharacter, getUserData, handleAdoptAnimal}) => {

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
    handleAdoptAnimal(formData)
  }

  const animalArray = allAnimals.map(animal => {
    return(
      <div className="animal_container">
        <p className="animal_type">{animal.animal}</p>
        <img src={animal.image[0]} alt="animal pic" width="200"></img>
        <button id="choose_animal_button" onClick={() => handleClick(animal)}>Adopt</button>
      </div>
    )
})



//   const saveNewUser = () => {
//   // Simple PUT request with a JSON body using fetch
//   const requestOptions = {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ 
//         username: loggedInUsername,
//         password: loggedInPassword,
//         animals: [currentCharacter]
//       })
//   };
//   fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
//       .then(response => response.json())
//       .then(data => this.setState({ postId: data.id }));
// }

  
  

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