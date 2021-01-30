import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const ChoicePage = ({onSubmit}) => {
  
  

  // const handleChange = (event) => {
  //   const newState = {...formData};
  //   newState[event.target.name] = event.target.value;
  //   setFormData(newState);
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   onSubmit(formData);
  // };

  return (
  <div>
    <h4>Create or Load</h4>
    <p>Choose wheather to create a new Tamagotchi or load a previously saved Tamagotchi</p>
    <br></br>
    <Link  from="/choicepage" to="/createpage">
      <button type="button">
          Create
      </button>
    </Link>
      <button>Load</button>
  </div>
  )};

export default ChoicePage;