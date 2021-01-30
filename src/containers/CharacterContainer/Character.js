import React, {useState} from "react";
import Buttons from "../../components/CharacterComponents/Button";
import StatBar from "../../components/CharacterComponents/StatBar";
import cat  from "../../assets/images/cat.png"

const Character = ({currentCharacter}) => {

    return(
        <div>
          <h2>
          {currentCharacter.name}
          </h2>
          <p>Species: {currentCharacter.animal_type.animal}</p>
          <img src={cat} alt="animal pic" width="200"></img>
            <StatBar stat={currentCharacter.health} statName="Health"/>
            <StatBar stat={currentCharacter.happiness} statName="Happiness"/>
            <StatBar stat={currentCharacter.cleanliness} statName="Cleanliness"/>
            <StatBar stat={currentCharacter.fitness} statName="Fitness"/>
            <StatBar stat={currentCharacter.hunger} statName="Hunger"/>
          
        </div>
    )
  };
  
  export default Character;