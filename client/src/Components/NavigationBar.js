import React, { Component } from 'react';
import { Nav, NavDropdown, Button, ButtonToolbar, Col, Navbar, Image, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Header.scss';


export default class NavigationBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            //need to pass id down to state   ex. isDriver: true, isPatient: false???  
            id: 2, 
        }
    }


    render(){
        return(<>
        <Navbar  className="px-5 header" sticky="top">
            <Navbar.Brand href="/"><Image src="./logo.png" width="150px"></Image></Navbar.Brand>
            <Nav variant="dark" fixed="top" className="ml-auto pr-md" activeKey="1">
                <Nav.Item >
                    <ButtonToolbar>
                        
                        <Link to={{pathname: "/appointments", state: {id: this.state.id}}}><Button variant="outline-dark" className="m-2">Appointment List</Button></Link>
                        
                        <Link to={{pathname: "/patient", state: {id: this.state.id}}}><Button variant="outline-dark" className="m-2">My Profile</Button></Link>
                        
                        
                        
                        <Link to={{pathname: "/", state: {id: null}}}><Button variant="outline-dark" className="m-2">Logout</Button></Link>
                    </ButtonToolbar>
                </Nav.Item>
            </Nav>
        </Navbar>
        </>)
    }

}