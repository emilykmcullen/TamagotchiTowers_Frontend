import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const CreatePage = ({allAnimals, setCurrentCharacter, userData, loggedInUsername, loggedInPassword, currentCharacter}) => {

  const handleClick = (animal) => {
    setCurrentCharacter(animal)
    if (!userData && loggedInUsername){
      console.log("Saving new user");
      // saveNewUser();
    }
  }

  const animalArray = allAnimals.map(animal => {
    return(
      <div>
        <p>{animal.name}</p>
        <img src={animal.images[0]} alt="animal pic" width="200"></img>
        <button onClick={() => handleClick(animal)}>{animal.name}</button>
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