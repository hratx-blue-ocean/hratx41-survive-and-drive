import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './Components/App.js';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import MainPage from './Components/MainPage.js';
import PatientProfile from './Components/PatientProfile.js';
import DriverProfile from './Components/DriverProfile.js';
// import './index.css';



const routing = (
    <Router >
        <div>
            <Route exact path='/' component={MainPage} />
            <Route path="/patient" component={PatientProfile}/>
            <Route path="/driver" component={DriverProfile}/>
            <Route path="/main" component={MainPage}/>
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));


            