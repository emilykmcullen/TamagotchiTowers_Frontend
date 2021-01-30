import React, {useState} from "react";
import Buttons from "../../components/CharacterComponents/Buttons";
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
          <img src={cat} alt="animal pic" width="200"></img>
          <StatBar currentCharacter={currentCharacter}></StatBar>
          <Buttons currentCharacter={currentCharacter}></Buttons>
          <HungerTimer 
          title ="Hunger bar" 
          hungerAmount ={3}/>
          <FitnessTimer />
          <CleanlinessTimer />
          <HappinessTimer />
        </div>
    )
  };
  
  export default Character;