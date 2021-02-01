import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";


const CreatePage = ({allAnimals, setCurrentCharacter, userData, loggedInUsername, loggedInPassword, currentCharacter, getUserData}) => {

  // const [user, setUser] = useState({
  //   userName: "",
  //   password: "",
  //   imageURL: "",
  //   animals: []
  // })



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



//   // const saveNewUser = () => {
//   // // Simple POST request with a JSON body using fetch
//   // const requestOptions = {
//   //     mode: 'no-cors',
//   //     method: 'POST',
//   //     headers: { 'Content-Type': 'application/json' },
//   //     body: JSON.stringify({ 
//   //       userName: loggedInUsername,
//   //       password: loggedInPassword,
//   //       imageURL: "fakeImgUrl",
//   //       animals: []
//   //     })
//   // };
//   // fetch('http://localhost:8080/api/users/', requestOptions)
//   //     .then(response => response.json())
//   //     .then(data => this.setState({ postId: data.id }));
// }

  
  

  return(
    <>
    <div className="animal_array_container">
        {animalArray}
    </div>
    <div className="link_container">
    <Link  from="/createpage" to="/character">
      <button type="button">
        Look after this pet
      </button>
    </Link>
    </div>
    </>
  )
};

export default CreatePage;