import React, { Component } from 'react';
import { Button, Jumbotron, Modal, Container } from 'react-bootstrap';
import Signup from './Signup.js';
import Login from './Login.js';
import UnloggedHeader from './UnloggedHeader.js';



import '../Styles/MainPage.scss';




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
            <UnloggedHeader signup={this.handleSignUp} login={this.handleLogin}/>

            {this.state.isLogin &&  <Login signup={this.handleSignUp}/>}
            {this.state.isSignup && <Signup login={this.handleLogin}/>}
            </>
        )
    }
}