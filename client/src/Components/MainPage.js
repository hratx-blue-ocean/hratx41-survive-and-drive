import React, { Component } from 'react';
import Signup from './Signup.js';
import Login from './Login.js';
import PatientProfile from './PatientProfile.js';
import DriverProfile from './DriverProfile.js'
import CreateAppointment from './CreateAppointment.js';
import { Button, Jumbotron, Modal, Nav } from 'react-bootstrap';


export default class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignup: true,
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
            <Nav>
                <Nav.Item>
                    <Nav.Link onClick={this.handleLogin}>Log In</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={this.handleSignUp}>Sign Up</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link >Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            {/* <Button onClick={this.handleSignUp}>Sign Up</Button> */}
                
            {this.state.isLogin && <Login signup={this.handleSignUp}/>}
            {this.state.isSignup && <Signup login={this.handleLogin}/>}

            </>
        )
    }
}