import React, {useState} from "react";

const Button = ({statName, increaseStat, buttonLabel, rate}) => {


  let lowerCaseStatName = statName.toString().toLowerCase()


  return(
      <div>
        <button type="button" onClick={() => increaseStat(lowerCaseStatName, rate)}>{buttonLabel}</button>
      </div>
  )
};

export default Button;