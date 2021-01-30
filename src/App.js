import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./containers/LandingPageContainer/NavBar";
import LandingPage from "./containers/LandingPageContainer/LandingPage";
import ChoicePage from "./containers/LoadCreateContainer/ChoicePage";
import CreatePage from "./containers/LoadCreateContainer/CreatePage";
import LoadPage from "./containers/LoadCreateContainer/LoadPage";
import Buttons from "./containers/CharacterContainer/Buttons";



const App = ()=> {

  const [loggedInUsername, setLoggedInUsername] = useState();
  const [loggedInPassword, setLoggedInPassword] = useState();
  const [userData, setUserData] = useState({});
  const [currentCharacter, setCurrentCharacter] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

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
        setLoggedInPassword(data.password)
        setLoggedIn(true);
      }else{
        console.log("Failure");
      }
    });
  }

  const getUserData = () => {
    console.log("getting user data");
    fetch(`https://localhost:3000/tamagotchi?username=${loggedInUsername}`)
    .then(res => res.json())
    .then(data => setUserData(data))
    // .then(() => setLoaded(true))
}

  // useEffect(() => {
  //   getUserData();
  // }, [loggedInUsername])

  
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
        <Route exact path="/" render={() => loggedIn? <Redirect to= "/choicepage" /> : <LandingPage onSubmit = {handleSubmit}></LandingPage>} />
        <Route path="/choicepage" component={ChoicePage}/>
        <Route path="/createpage" component={CreatePage}/>
        <Route path="/loadpage" component={LoadPage}/>
        <Route path="/buttons" component={Buttons}/>
        </Switch>
      </>
    </Router>
  )

}

export default App;
