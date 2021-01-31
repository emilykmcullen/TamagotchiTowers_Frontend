import React, {useState} from "react";
import StatBar from "../../components/CharacterComponents/StatBar";



const Character = ({currentCharacter, increaseStat}) => {

    return(
        <div>
          <h2>
          {currentCharacter.name}
          
          </h2>
          <p>Species: {currentCharacter.animal_type.animal}</p>
          <img src={currentCharacter.images[0]} alt="animal pic" width="200"></img>
            <StatBar stat={currentCharacter.health} statName="Health" increaseStat={increaseStat}/>
            <StatBar stat={currentCharacter.happiness} statName="Happiness" increaseStat={increaseStat}/>
            <StatBar stat={currentCharacter.cleanliness} statName="Cleanliness" increaseStat={increaseStat}/>
            <StatBar stat={currentCharacter.fitness} statName="Fitness" increaseStat={increaseStat}/>
            <StatBar stat={currentCharacter.hunger} statName="Hunger" increaseStat={increaseStat}/>
            
        </div>
    )
  };
  
  export default Character;