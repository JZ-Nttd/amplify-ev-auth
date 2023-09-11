import '../App.css';
// import React, { useState, useContext } from "react";
import React, { useState } from "react";
// import { AccountContext } from "./Account";
import { useHistory } from 'react-router-dom';
import {CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "../UserPool";
import { createContext } from "react";
import MyImage from '../images/ev-2.jpg';
import './login.css';

const LoginContext = createContext();

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const {authenticate} = useContext(AccountContext);
  const [ authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") || false);
  const [ userdetails ] = useState(localStorage.getItem("userdetails") || false);

  const authenticate = async (Username, Password) => { 
    return await new Promise((resolve, reject) => {
        const user = new CognitoUser({ Username, Pool});

        const authDetails = new AuthenticationDetails({Username, Password});
    
        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
            console.log("onSuccess: ", data);
            resolve(data);
            },
            onFailure: (err) => { 
            console.error("On Error: ", err);
            reject(err);
            },
            newPasswordRequired: (data) => {
            console.log("newPasswordRequired :", data, user, data.name);
            localStorage.setItem("authenticated", true);
            localStorage.setItem("userdetails", user);
            localStorage.setItem("username", data.name);
            resolve(data);
            }
        });
    });
    };
  const history = useHistory();
  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
    .then((data) => {
      console.log("Logged in !!!", data);
      setAuthenticated(true);

    })
    .catch((err) => {
      console.error("Error Occurred!!", err);
    });

    //routeChange();
    let path = `dashboard`;
    history.push(path);
  };

  // routeChange=()=> {

  // }


return (
    <div className="div-login">
    <div className='div-login-logo' >
       <img src={MyImage} alt="Logo" style={{width:250, height:200}} />
    </div>
    <div>
    <form onSubmit={onSubmit}> 
    <label htmlFor = "email">Email</label>
    <input value= {email} onChange={ (event) => setEmail(event.target.value)}></input>
    <label htmlFor = "password">Password</label>
    <input value= {password} onChange={ (event) => setPassword(event.target.value)}></input>
    <button type="submit">Login</button>
    </form>
    </div>
    {/* <LoginContext.Provider value={{authenticate}}>
        {props.children}
    </LoginContext.Provider> */}
</div>
);
}



export default Login;
