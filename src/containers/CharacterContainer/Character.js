import React, {useState} from "react";
import { Link } from "react-router-dom";
import StatBar from "../../components/CharacterComponents/StatBar";




const Character = ({currentCharacter, increaseStat, currentImage, loaded, setLoggedInUsername, setLoggedInPassword, setUserData, setCurrentCharacter, setLoggedIn, setHasSelectedCharacter, setLoaded, setUserDataLoaded, setAnimalDataLoaded, setEasyDifficulty}) => {

    if(loaded === false){
      return <p>Loading...</p>
    }

    const setEasy = () => {
      // Get the checkbox
  var checkBox = document.getElementById("myCheck");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    setEasyDifficulty(true)
  } else {
    setEasyDifficulty(false)
  }
    }

    const logout = (data) => {
      const requestOptions = {
          
          method: 'PUT',
          headers: {'Content-Type': 'application/json' },
          body: JSON.stringify(
            data
          )
      };
      return fetch(`http://localhost:8080/api/animals/${data.id}`, requestOptions)
      .then(setLoggedInUsername())
      .then(setLoggedInPassword())
      .then(setUserData([]))
      .then(setCurrentCharacter({}))
      .then(setLoggedIn(false))
      .then(setHasSelectedCharacter(false))
      .then(setLoaded(false))
      .then(setUserDataLoaded(false))
      .then(setAnimalDataLoaded(false))
    };

    const saveProgress = (data) => {
      const requestOptions = {
          
          method: 'PUT',
          headers: {'Content-Type': 'application/json' },
          body: JSON.stringify(
            data
          )
      };
      return fetch(`http://localhost:8080/api/animals/${data.id}`, requestOptions)
      .then(setCurrentCharacter({}))
      .then(setHasSelectedCharacter(false))
    };

    return(
        <div>
          <h2>
          {currentCharacter.animalName}
          
          </h2>
          <p>Species: {currentCharacter.animalType}</p>
          <img src={currentImage} alt="animal pic" width="200"></img>
          <p>Easy Mode</p>
          <label className="switch">
            <input type="checkbox" id="myCheck" onClick={setEasy}></input>
            <span className="slider round"></span>
          </label>
            <StatBar stat={currentCharacter.health} statName="Health"
             increaseStat={increaseStat}/>
            <StatBar stat={currentCharacter.happiness} statName="Happiness" 
            buttonLabel="Play with" increaseStat={increaseStat} />
            <StatBar stat={currentCharacter.cleanliness} statName="Cleanliness"
             increaseStat={increaseStat} buttonLabel="Put in the bath"/>
            <StatBar stat={currentCharacter.fitness} statName="Fitness"
             increaseStat={increaseStat} buttonLabel="Take for walk"/>
            <StatBar stat={currentCharacter.hunger} statName="Hunger"
             increaseStat={increaseStat} buttonLabel="Feed"/>
          <br/>
          <Link  from="/character" to="/" >
          <button type="button" onClick={() => logout(currentCharacter)}>
              Save and log out
          </button>
          </Link>
          <Link  from="/character" to="/choicepage" >
          <button type="button" onClick={() => saveProgress(currentCharacter)}>
              Save progress!
          </button>
          </Link>
        </div>
    )
  };
  
  export default Character;