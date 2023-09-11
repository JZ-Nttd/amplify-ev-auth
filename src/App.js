import './App.css';
//import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Pages/Login';
//import Signup from './Pages/Signup';
import {Account} from './Pages/Account';
// import Status from './Pages/Status';
// import React, {Component} from 'react';
// import MyImage from './images/ev-2.jpg';
import './Pages/login.css';
// import { config } from './Config';
// import {PublicClientApplication} from '@azure/msal-browser';

import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

const App = () => { 
return (
    <Fragment>
    <Router>
    <Switch>
    <Route path="/Login">
      <Login />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
  </Switch>
</Router>
</Fragment>
//   <div> 
//     <Account>
//         {/* <Status /> */}
//         <Login />
//     </Account>
// </div>
);
}


export default App;



// class App extends Component { 

//     constructor(props) { 
//         super(props);
//         this.state = {
//             error: null, 
//             isAuthenticated: false,
//             user: {}
//         };
//         this.login = this.login.bind(this);
//         // Initialize the MSAL application object
//         this.publicClientApplication  = new PublicClientApplication({
//             auth: {
//                 clientId: config.appId,
//                 redirectUri: config.redirectUri,
//                 authority: config.authority
//             },
//             cache: {
//                 cacheLocation: "sessionStorage",
//                 storeAuthStateInCookie: true
//             }
//         });
//     }

//     async login(){
//         //alert('hi');
//         try { 
//             await this.publicClientApplication.initialize();
//             // login via popup
//             await this.publicClientApplication.loginPopup(
//                 {
//                     scopes: config.scopes, 
//                     prompt: "select_account"
//                 });
//                 this.setState({isAuthenticated: true});
//         }
//         catch(err) { 
//             this.setState({
//                 isAuthenticated: false,
//                 user: {},
//                 error: err
//             });
//         }
//     }
//     logout() { 
//         this.publicClientApplication.logout();
//     }

//     // state={
//     //     email:'', 
//     //     pwd:''
//     // }
//     // handleOnChange = (e) => {
//     //     const {name, value} = e.target
//     //     this.setState({[name]: value})
//     // }

//     // handleOnSubmit = (e) => {
//     //     e.preventDefault();
//     // }

//     render() { 

//         return (
//             <div className="div-login">
//                 <header>
//                 <div className='div-login-logo' >
//                     <img src={MyImage} alt="Logo" style={{width:250, height:200}} />
//                 </div>
//                 <div>
//                     Username or Email: <input type = "email" name = "email" placeholder = "email..." required/>
//                     <br/>
//                     Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <input type = "password" name = "pwd" placeholder = "password..." required/>
//                     <br/> <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <button onClick={() => this.login()}>Log In</button>
//                 </div>
//                 </header>
//             </div>
//         )
//     }
// }

// export default App;