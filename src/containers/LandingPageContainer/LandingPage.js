import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const LandingPage = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    const newState = {...formData};
    newState[event.target.name] = event.target.value;
    setFormData(newState);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
  <div>
    <div id="welcome_message">
      <h2>Welcome to our magical homepage</h2>
    </div>
    <br></br>
    <form>
      <div className="form_wrap">
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          name="username"
          id="username"
          type="text"
          value={formData.username} />
      </div>

      <div className="form_wrap">
        <label htmlFor="password">Password:</label>
        <input
          onChange={handleChange}
          name="password"
          id="password"
          type="password"
          value={formData.password} />
      </div>
      <div className="form_wrap">
        <input onClick={handleSubmit} type="submit" value="submit" />
      </div>
    </form>
    <br/>
    <br/>
    <Link className="form_wrap" from="/" to="/createpage">
      <button type="button">
          I'm new here!
      </button>
    </Link>
  </div>
  )};

export default LandingPage;