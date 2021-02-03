import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

<<<<<<< HEAD
const ChoicePage = ({unsetSelectedCharacter, loaded}) => {
=======
const ChoicePage = ({unsetSelectedCharacter, userDataLoaded}) => {
>>>>>>> develop

  useEffect(() => {
    unsetSelectedCharacter();
  }, [])
  
  if(userDataLoaded === false){
    return <p>Loading....</p>
  }
  
    
  

  return (
  <div>
    <h4>Create or Load</h4>
    <p>Choose whether to create a new Tamagotchi or load a previously saved Tamagotchi</p>
    <br></br>
    <Link  from="/choicepage" to="/createpage">
      <button type="button">
          Create
      </button>
    </Link>
    <Link  from="/choicepage" to="/loadpage">
      <button type="button">
          Load
      </button>
    </Link>
  </div>
  )};

export default ChoicePage;