import React, { Component } from 'react';
import Signup from './Signup.js';
import Login from './Login.js';
import PatientProfile from './PatientProfile.js';
import DriverProfile from './DriverProfile.js'
import CreateAppointment from './CreateAppointment.js';
import { Button } from 'react-bootstrap';


export default class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignup: false,
            isLogin: false,
        }
        
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSignUp() {
        this.setState({
            isSignup: true,
            isLogin: false
        });
    }

    handleLogin() {
        this.setState({
            isLogin: true,
            isSignup: false
        });
    }

    render() {
        // if (this.state.isSignup === true) {
        //     return (
        //         <Signup />
        //     )
        // } else         
        // if (this.state.isLogin === true) {
        //     return (
        //         <Login />
        //     )
        // }
        return (
            <>  
                <h1>Survive and Drive!</h1>
                <Button onClick={this.handleSignUp}>Sign Up</Button>
                <Button onClick={this.handleLogin}>Login</Button>
                {this.state.isLogin && <Login/>}
                {this.state.isSignup && <Signup />}
                {/* <Signup /> */}
                {/* <CreateAppointment /> */}
                {/* <PatientProfile /> */}
                {/* <Login /> */}
                {/* <DriverProfile /> */}
            </>
        )
    }
}