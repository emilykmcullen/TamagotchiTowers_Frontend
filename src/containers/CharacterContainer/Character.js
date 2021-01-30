import React, {useState} from "react";
import Buttons from "./Buttons";
import HungerTimer from "./HungerTimer";
import FitnessTimer from "./FitnessTimer";
import CleanlinessTimer from "./CleanlinessTimer";
import HappinessTimer from "./HappinessTimer";


const Character = ({currentCharacter}) => {
  
  

    return(
        <div>
          <h2>
          {currentCharacter.name}
          
          </h2>
          <img src={currentCharacter.images[0]} alt="animal pic" width="200"></img>
          <HungerTimer 
          title ="Hunger bar" 
          hungerAmount ={3}/>
          <FitnessTimer />
          <CleanlinessTimer />
          <HappinessTimer />
          <Buttons currentCharacter={currentCharacter}></Buttons>
        </div>
    )
  };
  
  export default Character;