import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const SaveForm = ({logInNewUser, animals, currentCharacter, setCurrentCharacter, userData, loggedInUsername, loggedInPassword, setLoggedInPassword, setLoggedIn, getUserData, setLoaded}) => {

    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleUsernameChange = (evt) => {
        setNewUsername(evt.target.value);
    };

    const handlePasswordChange = (evt) => {
        setNewPassword(evt.target.value);
    };

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const usernameToSubmit = newUsername.trim();
        const passwordToSubmit = newPassword.trim();
        logInNewUser({
            newUsername: usernameToSubmit,
            newPassword: passwordToSubmit
        });
        
        // setNewUsername("");
        // setNewPassword("");
    }

    const saveNewUser = () => {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              userName: newUsername,
              password: newPassword,
              imageURL: "fakeImgUrl",
              animals: []
            })
        };
        return fetch('http://localhost:8080/api/users', requestOptions)
            .then(setNewUsername(""))
            .then(setNewPassword(""))
            .then(getUserData())
            .then(() => setLoaded(true));
          

      }

      const handleClick = () => {
          console.log("Saving new user");
          saveNewUser();
          getUserData();
      }

    return(
        <>
        <p>If you would like to save your pet please create a username and password in the form below</p>
        <p>Otherwise, just click the button below to continue without creating an account</p>
        <Link  from="/newuser" to="/createpage">
            <button type="button">
                Continue without creating account
            </button>
        </Link>
        <form className="comment-form" onSubmit={handleFormSubmit}>
            <input type="text"
            placeholder="Your username"
            value={newUsername}
            onChange={handleUsernameChange}/>
            

            <input type="password"
            placeholder="Your password"
            value={newPassword}
            onChange={handlePasswordChange}/>

            <input type="submit"
            value="Create Account and Log in"/>
        </form>
        <button onClick={handleClick}>Save user</button>
        <Link  from="/newuser" to="/createpage">
            <button type="button">
                Create a new pet
            </button>
        </Link>
        </>
    )
};

export default SaveForm;