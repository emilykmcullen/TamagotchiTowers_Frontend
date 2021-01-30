import React, {useState} from "react";

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
    <h4>Load or Create</h4>
    <p>Choose to load a previously saved Tamagotchi or create a new one </p>
    <br></br>
    <button>Load</button>
    <button>Create</button>
  </div>
  )};

export default ChoicePage;