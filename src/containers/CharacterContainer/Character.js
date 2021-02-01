import React, {useState} from "react";
import StatBar from "../../components/CharacterComponents/StatBar";




const Character = ({currentCharacter, increaseStat, currentImage}) => {


    return(
        <div>
          <h2>
          {currentCharacter.name}
          
          </h2>
          <p>Species: {currentCharacter.animal_type.animal}</p>
          <img src={currentImage} alt="animal pic" width="200"></img>
            <StatBar stat={currentCharacter.health}statName="Health"
             increaseStat={increaseStat}/>
            <StatBar stat={currentCharacter.happiness} rate={currentCharacter.animal_type.stats.cheeriness} statName="Happiness" 
            buttonLabel="Play with" increaseStat={increaseStat} />
            <StatBar stat={currentCharacter.cleanliness} rate={currentCharacter.animal_type.stats.grooming} statName="Cleanliness"
             increaseStat={increaseStat} buttonLabel="Put in the bath"/>
            <StatBar stat={currentCharacter.fitness} rate={currentCharacter.animal_type.stats.activity_level} statName="Fitness"
             increaseStat={increaseStat} buttonLabel="Take for walk"/>
            <StatBar stat={currentCharacter.hunger} rate={currentCharacter.animal_type.stats.appetite} statName="Hunger"
             increaseStat={increaseStat} buttonLabel="Feed"/>
            
        </div>
    )
  };
  
  export default Character;