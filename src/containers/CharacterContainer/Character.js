import React, {useState} from "react";
import StatBar from "../../components/CharacterComponents/StatBar";




const Character = ({currentCharacter, increaseStat, currentImage}) => {


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
            
        </div>
    )
  };
  
  export default Character;