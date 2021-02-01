import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const SaveForm = ({onNewUserSubmit, animals, currentCharacter, setCurrentCharacter, userData, loggedInUsername, loggedInPassword, setLoggedInPassword, getUserData, setLoggedIn}) => {

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
        onNewUserSubmit({
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
              userName: loggedInUsername,
              password: loggedInPassword,
              imageURL: "fakeImgUrl",
              animals: []
            })
        };
        return fetch('http://localhost:8080/api/users', requestOptions)
            // .then(setLoggedIn(true))
      }

      const handleClick = () => {
        if (loggedInUsername && loggedInPassword){
          console.log("Saving new user");
          saveNewUser();
        }
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
            

            <input type="text"
            placeholder="Your password"
            value={newPassword}
            onChange={handlePasswordChange}/>

            <input type="submit"
            value="Create Account and Log in"/>
        </form>
        <button onClick={handleClick}>Save user</button>
        </>
    )
};

export default SaveForm;