import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './Components/App.js';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import MainPage from './Components/MainPage.js';
import PatientProfile from './Components/PatientProfile.js';
import DriverProfile from './Components/DriverProfile.js';
import AppointmentNavigation from './Components/AppointmentNavigation.js';
import Signup from './Components/Signup.js';
import CreateAppointment from './Components/CreateAppointment.js';
import { Container } from 'react-bootstrap';
import Login from './Components/Login';

import './Styles/Index.scss';



const routing = (
    <>
    <Router >
        <div>
            <Route exact path='/' component={Signup} />
            <Route path='/survivors' render={(props) => <PatientProfile {...props} />}/>
            <Route path='/createapp' render={(props) => <CreateAppointment {...props}/>}/>
            <Route path='/login' render={(props) => <Login {...props}/>}/>
            <Route path='/appointments' render={(props) => <AppointmentNavigation {...props}/>}/>

            <Route path="/drivers" component={DriverProfile}/>
            <Route path='/signup' component={Signup} />
        </div>
    </Router>
    </>
)


ReactDOM.render(routing, document.getElementById('root'));