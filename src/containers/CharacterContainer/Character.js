import React, {useState} from "react";
import Buttons from "../../components/CharacterComponents/Button";
import StatBar from "../../components/CharacterComponents/StatBar";
import CleanlinessTimer  from "../../components/CharacterComponents/CleanlinessTimer";
import FitnessTimer  from "../../components/CharacterComponents/FitnessTimer";
import HappinessTimer from "../../components/CharacterComponents/HappinessTimer";
import HungerTimer from "../../components/CharacterComponents/HungerTimer";
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
            <HappinessTimer />
            <StatBar stat={currentCharacter.cleanliness} statName="Cleanliness"/>
            <CleanlinessTimer />
            <StatBar stat={currentCharacter.fitness} statName="Fitness"/>
            <FitnessTimer />
            <StatBar stat={currentCharacter.hunger} statName="Hunger"/>
            <HungerTimer 
            title ="Hunger bar" 
            hungerAmount ={3}/>
          
        </div>
    )
  };
  
  export default Character;