import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const CreatePage = () => {
  
  

  return(
    <div>
      <h1>Create Page</h1>
      <p>If you would like to save your pet please create a username and password in the form below</p>
      <p>Otherwise, just leave these fields blank</p>
        <Link  from="/createpage" to="/buttons">
            <button type="button">
                Look after your pet
            </button>
        </Link>
    </div>
  )
};

export default CreatePage;