import React, { Component } from 'react';
import { Nav, NavDropdown, Button, ButtonToolbar, Col, Navbar, Image, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class NavigationBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            //need to pass id down to state   ex. isDriver: true, isPatient: false???  
            currentUser: 2,
            type: 'survivor' 
        }
    }

    componentDidMount() {
        this.setState({
            currentUser: this.props.currentUser,
            type: this.props.type
        });
    }


    render(){
        return(<>
        <Navbar  className="m-2 p-1" sticky="top" bg="light" variant="light">
            <Navbar.Brand href="/"><Image src="./logo.png" width="150px"></Image></Navbar.Brand>
            <Nav variant="dark" fixed="top" className="ml-auto pr-md" activeKey="1">
                <Nav.Item >
                    <ButtonToolbar>
                        
                        <Link to={{pathname: "/appointments", state: {currentUser: this.state.currentUser}}}><Button variant="outline-dark" className="m-2">Appointment List</Button></Link>
                        
                        <Link to={{pathname: `${this.state.type}s`, state: {currentUser: this.state.currentUser}}}><Button variant="outline-dark" className="m-2">My Profile</Button></Link>
                        
                        
                        <Link to={{pathname: "/", state: {currentUser: null}}}><Button variant="outline-dark" className="m-2">Logout</Button></Link>
                        
                    </ButtonToolbar>
                </Nav.Item>
            </Nav>
        </Navbar>
        </>)
    }

}