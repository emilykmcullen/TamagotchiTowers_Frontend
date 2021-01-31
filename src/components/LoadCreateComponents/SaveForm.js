import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const SaveForm = ({onNewUserSubmit}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value);
    };

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const usernameToSubmit = username.trim();
        const passwordToSubmit = password.trim();
        onNewUserSubmit({
            username: usernameToSubmit,
            password: passwordToSubmit
        });
        
        setUsername("");
        setPassword("");
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
        <form className="comment-form" onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Your username"
            value={username}
            onChange={handleUsernameChange}/>
            

            <input type="text"
            placeholder="Your password"
            value={password}
            onChange={handlePasswordChange}/>

            <input type="submit"
            value="Create Account and Log in"/>
        </form>
        </>
    )
};

export default SaveForm;