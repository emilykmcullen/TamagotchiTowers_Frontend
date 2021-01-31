import React, {useState} from "react";

const Button = ({statName, increaseStat}) => {

  let lowerCaseStatName = statName.toString().toLowerCase()


  return(
      <div>
        <button type="button" onClick={() => increaseStat(lowerCaseStatName)}> Increase {statName}</button>
      </div>
  )
};

export default Button;