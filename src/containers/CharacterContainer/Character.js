import React, {useState} from "react";
import Buttons from "../../components/CharacterComponents/Buttons";
import StatBar from "../../components/CharacterComponents/StatBar";
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
        </div>
    )
  };
  
  export default Character;