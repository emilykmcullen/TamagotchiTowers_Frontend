import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const LoadPage = () => {
  
  

  return(
    <div>
    <h1>Load Page</h1>
      <Link  from="/loadpage" to="/buttons">
          <button type="button">
              Look after your pet
          </button>
      </Link>
  </div>
  )
};

export default LoadPage;