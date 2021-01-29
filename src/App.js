import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./containers/LandingPageContainer/LandingPage";


const App = ()=> {

  const [loggedInUsername, setLoggedInUsername] = useState();

  const usernameAndPassword = [
    {username: "Emily", password: "3mily"},
    {username: "Stuart", password: "5tuart"},
    {username: "Ruth", password: "7uth"},
    {username: "Michael", password: "m1chael"},
    {username: "Andy", password: "4ndy"}
  ]

  const handleSubmit = (data) => {
    usernameAndPassword.forEach(element => {
      if (element.username === data.username && element.password === data.password){
        console.log("Success");
        setLoggedInUsername(data.username)
      }else{
        console.log("Failure");
      }
    });
  }
  
  return (
    <Router>
      <>
        {/* <NavBar /> */}
        <Switch>
        <Route exact path="/" render={() => <LandingPage onSubmit = {handleSubmit}></LandingPage>} />
        </Switch>
      </>
    </Router>
  )

}

export default App;
