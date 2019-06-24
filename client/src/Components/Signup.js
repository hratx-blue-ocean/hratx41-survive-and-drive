import React, { Component } from 'react';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            phone: '',
            type: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState = {
            [e.target.name]: e.target.value
        };
    }

    handleSubmit() {
        //axios post for state info
        
    }

    render() {
        return (
            <div>
                <form>
                    First Name: <br></br>
                    <input name='firstName' onChange={this.handleChange}></input><br></br>
                    Last Name: <br></br>
                    <input name='lastName' onChange={this.handleChange}></input><br></br>
                    Address: <br></br>
                    <input name='address' onChange={this.handleChange}></input><br></br>
                    City: <br></br>
                    <input name='city' onChange={this.handleChange}></input><br></br>
                    State: <br></br>
                    <input name='state' onChange={this.handleChange}></input><br></br>
                    Zip Code: <br></br>
                    <input name='zip' onChange={this.handleChange}></input><br></br>
                    Email: <br></br>
                    <input name='email' onChange={this.handleChange}></input><br></br>
                    Phone Number: <br></br>
                    <input name='phone' onChange={this.handleChange}></input><br></br>
                    Password: <br></br>
                    <input name='password' onChange={this.handleChange}></input><br></br>
                    <select>
                        <option value='survivor'>Survivor</option>
                        <option value='driver'>Driver</option>
                    </select>
                </form>
                <button onSubmit={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

