import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./containers/LandingPageContainer/NavBar";
import LandingPage from "./containers/LandingPageContainer/LandingPage";
import ChoicePage from "./containers/LoadCreateContainer/ChoicePage";
import CreatePage from "./containers/LoadCreateContainer/CreatePage";
import LoadPage from "./containers/LoadCreateContainer/LoadPage";
import Character from "./containers/CharacterContainer/Character";
import dogExclamation from './gifs/dog/dog_exclamation.gif'
import dogHeart  from "./gifs/dog/dog_heart.gif"
import catMeow from "./gifs/cat/cat_meow.gif"
import catExclamation from './gifs/cat/cat_exclamation.gif'
import monkeySpeak from "./gifs/monkey/monkey_speak.gif"
import monkeyExclamation from "./gifs/monkey/monkey_exclamation.gif"
import unicornRainbow from "./gifs/unicorn/unicorn_rainbow.gif"
import unicornExclamation from "./gifs/unicorn/unicorn_exclamation.gif"
import dinoRawr from "./gifs/dino/dinosaur_rawr.gif"
import dinoExclamation from "./gifs/dino/Dinosaur_exclamation.gif"
import penguinHeart from "./gifs/penguin/penguin_heart.gif"
import penguinExclamation from './gifs/penguin/penguin_exclamation.gif'
import "./App.css"
import "./style/LandingPage.css"
import "./style/CreatePage.css"
import SaveForm from "./components/LoadCreateComponents/SaveForm";




const App = ()=> {

  const [loggedInUsername, setLoggedInUsername] = useState();
  const [loggedInPassword, setLoggedInPassword] = useState();
  const [userData, setUserData] = useState({});
  const [currentCharacter, setCurrentCharacter] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  


  const animals = [
    {id: 1, animal_type: { animal: "dog" , stats: {
      appetite: 0.5, grooming: 0.6, cheeriness: 0.2, activity_level: 0.9
    }}, main_image: [dogHeart], sad_image:[dogExclamation],
    name: "Jellibobs", health: 100, happiness:100, cleanliness:100,
    fitness:100, hunger:100
    },
    {id: 2, animal_type: {animal: "cat" , stats: {
      appetite: 0.3, grooming: 0.2, cheeriness: 0.7, activity_level: 0.6
    }}, main_image: [catMeow], sad_image:[catExclamation],
    name: "Kitty Fursbags", health: 100, happiness:100, cleanliness:100,
    fitness:100, hunger:100
    },
    {id: 3, animal_type: {animal: "monkey" , stats: {
      appetite: 0.9, grooming: 0.7, cheeriness: 0.5, activity_level: 1
    }}, main_image: [monkeySpeak], sad_image:[monkeyExclamation],
    name: "Cheeky Chops", health: 100, happiness:100, cleanliness:100,
    fitness:100, hunger:100
    },
    {id: 4, animal_type: {animal: "unicorn" , stats: {
      appetite: 0.5, grooming: 0.9, cheeriness: 0.6, activity_level: 0.7
    }}, main_image: [unicornRainbow], sad_image:[unicornExclamation],
    name: "Dolly", health: 100, happiness:100, cleanliness:100,
    fitness:100, hunger:100
    },
    {id: 5, animal_type: {animal: "dinosaur" , stats: {
      appetite: 0.9, grooming: 0.1, cheeriness: 0.1, activity_level: 0.7
    }}, main_image: [dinoRawr], sad_image:[dinoExclamation],
    name: "Mr. Flamez", health: 100, happiness:100, cleanliness:100,
    fitness:100, hunger:100
    },
    {id: 6, animal_type: {animal: "penguin" , stats: {
      appetite: 0.5, grooming: 0.9, cheeriness: 0.6, activity_level: 0.7
    }}, main_image: [penguinHeart], sad_image:[penguinExclamation],
    name: "Beany", health: 100, happiness:100, cleanliness:100,
    fitness:100, hunger:100
  }  
  ]
  //dummy data
  const usernameAndPassword = [
    {id: 100, username: "Emily", password: "3mily", animals: [animals[0]]},
    {id: 99, username: "Stuart", password: "5tuart",  animals: [animals[1]]},
    {id: 98, username: "Ruth", password: "7uth", animals: [animals[2], animals[3]]},
    {id: 97, username: "Michael", password: "m1chael", animals: [animals[4]]},
    {id: 96, username: "Andy", password: "4ndy", animals: [animals[5]]}
  ]
  //if they need a lot of food, appetite = high
  //if they get dirty quickly/don't groom often, grooming = high
  //if they are unhappy animals, cheeriness = high
  //if they need a lot of exercise, activity level = high

  const reduceStats = () => {
    if (currentCharacter.happiness>0){
      
    const interval = setInterval(() => {
      currentCharacter.happiness -=.01;
      setIntervalId(interval)
      if(currentCharacter.happiness === 0) {
    }}, 10);
  }
  if (currentCharacter.cleanliness>0){
      
    const interval = setInterval(() => {
      
      currentCharacter.cleanliness -=.01;
      setIntervalId(interval)
      if(currentCharacter.cleanliness === 0) {
    }}, 10);
  }
  if (currentCharacter.hunger>0){
      
    const interval = setInterval(() => {
      currentCharacter.hunger -=.01;
      setIntervalId(interval)
      if(currentCharacter.hunger === 0) {
    }}, 10);
  }
  if (currentCharacter.fitness>0){
      
    const interval = setInterval(() => {
      currentCharacter.fitness -=.01;
      setIntervalId(interval)
      if(currentCharacter.fitness === 0) {
    }}, 10);
  }
  }

  
  const characterGif = () => {
    if (currentCharacter){
      if (currentCharacter.happiness<50){
      setCurrentImage(currentCharacter.sad_image)
      } 
      else{
      setCurrentImage(currentCharacter.main_image)
      }  
    }
  }



  clearInterval(intervalId);

  const increaseStat = (stat) => {
    if (currentCharacter[stat]<95){
      currentCharacter[stat] += 5;
    }
    else (currentCharacter[stat] = 100)
  }



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

  const selectCurrentCharacter = (characterId) => {
    setCurrentCharacter(animals.find(animal => animal.id === characterId))
  }

  const getUserData = () => {
    console.log("getting user data");
    if (loggedIn){
      setUserData(usernameAndPassword.find(element => element.username === loggedInUsername))
    }
//this would mean there cannot be duplicate usernames!

    // fetch(`https://localhost:3000/tamagotchi?username=${loggedInUsername}`)
    // .then(res => res.json())
    // .then(data => setUserData(data))
    // .then(() => setLoaded(true))
}

  useEffect(() => {
    getUserData();
  }, [loggedInUsername])

  useEffect(() => {
    if (currentCharacter){
    reduceStats()
    characterGif()
    }
  }, [currentCharacter.happiness, currentCharacter.fitness, currentCharacter.cleanliness, currentCharacter.hunger, currentCharacter.health])

  const logInNewUser = (userDeets) => {
    setLoggedInUsername(userDeets.username);
    setLoggedInPassword(userDeets.password);
    setLoggedIn(true);
  }



  
  return (
    <Router>
      <>
        <header>
          <h1 id="title">Tamagotchi Towers</h1>
          <NavBar id="navbar"/>
        </header>
        <Switch>
        <Route exact path="/" render={() => loggedIn? <Redirect to= "/choicepage" /> : <LandingPage onSubmit = {handleSubmit}></LandingPage>} />
        <Route path="/choicepage" component={ChoicePage} />
        <Route path="/newuser" render={() => loggedIn? <Redirect to="/createpage" /> : <SaveForm onNewUserSubmit={(userDeets) => logInNewUser(userDeets)}/>}/>
        <Route path="/createpage" render={() => <CreatePage allAnimals={animals} currentCharacter={currentCharacter} setCurrentCharacter={setCurrentCharacter} userData={userData} loggedInUsername={loggedInUsername} setLoggedInPassword={loggedInPassword} getUserData={getUserData}/>}/>
        <Route path="/loadpage"  render={() => <LoadPage userAnimals={userData.animals} selectCurrentCharacter={selectCurrentCharacter}/>} />
        <Route path="/character" render={() => <Character currentCharacter={currentCharacter} currentImage={currentImage} increaseStat={increaseStat}/>}/>
        
        </Switch>
      </>
    </Router>
  )

}

export default App;
