import React, {useState} from "react";
import StatBar from "../../components/CharacterComponents/StatBar";




const Character = ({currentCharacter, increaseStat, currentImage, loaded}) => {

    if(loaded === false){
      return <p>Loading...</p>
    }

    return(
        <div className="character_sheet">
          <div className="left_side_character">
          <h4>
          {currentCharacter.animalName}
          </h4>
          <p><h5>Species: {currentCharacter.animalType}</h5></p>
          <img src={currentImage} alt="animal pic" width="200"></img>
          </div>
          <div className="right_side_character">
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
        </div>
    )
  };
  
  export default Character;