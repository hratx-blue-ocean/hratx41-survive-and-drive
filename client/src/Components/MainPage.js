import React, { Component } from 'react';
import Signup from './Signup.js';
import Login from './Login.js';
import PatientProfile from './PatientProfile.js';
import DriverProfile from './DriverProfile.js'
import CreateAppointment from './CreateAppointment.js';


export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
            <div>
                <h1>Survive and Drive!</h1>
                {/* <Signup /> */}
                <CreateAppointment />
                {/* <Login />
                <DriverProfile /> */}
            </div>
            </>
        )
    }
}