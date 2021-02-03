import React, {useState} from "react";
import { Link } from "react-router-dom";
import StatBar from "../../components/CharacterComponents/StatBar";




const Character = ({currentCharacter, increaseStat, currentImage, loaded, setLoggedInUsername, setLoggedInPassword, setUserData, setCurrentCharacter, setLoggedIn, setHasSelectedCharacter, setLoaded, setUserDataLoaded, setAnimalDataLoaded}) => {

    if(loaded === false){
      return <p>Loading...</p>
    }

    // const logout = () => {
    //   setLoggedInUsername();
    //   setLoggedInPassword();
    //   setUserData([]);
    //   setCurrentCharacter({});
    //   setLoggedIn(false);
    //   setHasSelectedCharacter(false);
    //   setLoaded(false);
    //   setUserDataLoaded(false);
    //   setAnimalDataLoaded(false);
    // }

    const logout = (data) => {
      // Simple POST request with a JSON body using fetch
      const requestOptions = {
          
          method: 'PUT',
          headers: {'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: data.id, 
            animalName: data.name,
            animalType: data.animaltype,
            health: data.health,
            happiness: data.happiness,
            cleanliness: data.cleanliness,
            fitness: data.fitness,
            hunger: data.hunger,
            user: {
              id: data.user.id,
              userName: data.user.userName,
              password: data.user.password,
              imageURL: data.user.imageURL
            },
            appetite: data.appetite,
            grooming: data.grooming,
            cheeriness: data.cheeriness,
            activityLevel: data.activityLevel,
            speak: data.speak,
            exclamation: data.exclamation,
            heart: data.heart,
            RIP: data.rip
          })
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

    return(
        <div>
          <h2>
          {currentCharacter.animalName}
          
          </h2>
          <p>Species: {currentCharacter.animalType}</p>
          <img src={currentImage} alt="animal pic" width="200"></img>
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
              Log out
          </button>
          </Link>
        </div>
    )
  };
  
  export default Character;