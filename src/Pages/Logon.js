import React from 'react';
//import {ReactComponent as Logo} from '../images/electric-vehicle-charging.webp';
import MyImage from '../images/ev-2.jpg';
import './login.css';
// import { config } from '../Config';
// import {PublicClientApplication} from '@azure/msal-browser';

class Logon extends React.Component { 

    // constructor(props) { 
    //     super(props);
    //     this.state = {
    //         error: null, 
    //         isAuthenticated: false,
    //         user: {}
    //     };
    //     this.logon = this.Logon.bind(this);
    //     // Initialize the MSAL application object
    //     this.publicClientApplication  = new PublicClientApplication({
    //         auth: {
    //             clientId: config.appId,
    //             redirectUri: config.redirectUrl,
    //             authority: config.authority
    //         },
    //         cache: {
    //             cacheLocation: "sessionStorage",
    //             storeAuthStateInCookie: true
    //         }
    //     });
    // }

    // async logon(){
    //     //alert('hi');
    //     try { 
    //         // logon via popup
    //         await this.publicClientApplication.logonPopup(
    //             {
    //                 scopes: config.scopes, 
    //                 prompt: "select_account"
    //             });
    //             this.setState({isAuthenticated: true});
    //     }
    //     catch(err) { 
    //         this.setState({
    //             isAuthenticated: false,
    //             user: {},
    //             error: err
    //         });
    //     }
    // }
    // logout() { 
    //     this.publicClientApplication.logout();
    // }

    state={
        email:'', 
        pwd:''
    }
    handleOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
    }

    render() { 

        return (
            <div className="div-login">
                <div className='div-login-logo' >
                    <img src={MyImage} alt="Logo" style={{width:250, height:200}} />
                </div>
                <div>
                <form onSubmit={this.handleSubmit}>
                    Username or Email: <input type = "email" name = "email" placeholder = "email..." required/>
                    <br/>
                    Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type = "password" name = "pwd" placeholder = "password..." required/>
                    <br/> <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onSubmit={this.handleSubmit}>Log In</button>
                </form>
                </div>
            </div>
        )
    }
}

export default logon;