import React, {useState} from "react";
import Buttons from "./Buttons"

const Character = ({currentCharacter}) => {
  
  

    return(
        <div>
          <h2>
          {currentCharacter.name}
          </h2>
          <img src={currentCharacter.images[0]} alt="animal pic" width="200"></img>
          <Buttons currentCharacter={currentCharacter}></Buttons>
        </div>
    )
  };
  
  export default Character;