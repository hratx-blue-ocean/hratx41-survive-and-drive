import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            passowrd: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //handles login
    }

    render() {
        return (
            <>
            <form>
                Email: <br></br>
                <input name='email'></input>
                Password: <br></br>
                <input name='password'></input>
            </form>
            <button onClick={this.handleClick}>Login</button>
            </>
        )
    }
}