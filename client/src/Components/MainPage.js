import React, { Component } from 'react';
import Signup from './Signup.js';
import Login from './Login.js';
import PatientProfile from './PatientProfile.js';
import DriverProfile from './DriverProfile.js'
import CreateAppointment from './CreateAppointment.js';
import { Button, Jumbotron, Modal } from 'react-bootstrap';


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
        return (
            <>  
            <Jumbotron>
            <h1>Survive and Drive!</h1>
            </Jumbotron>
                <Button onClick={this.handleSignUp}>Sign Up</Button>
                <Button onClick={this.handleLogin}>Login</Button>
                {this.state.isLogin && <Login/>}
                {this.state.isSignup && <Signup />} 
            </>
        )
    }
}