import React, {useState} from "react";

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
    <h4>Home</h4>
    <p>Welcome to our magical homepage</p>
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
      <input onClick={handleSubmit} type="submit" value="submit" />
    </form>
  </div>
  )};

export default LandingPage;