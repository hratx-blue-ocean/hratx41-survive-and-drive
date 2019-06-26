import React, { Component } from 'react';
import { Nav, NavDropdown, Button, ButtonToolbar, Col, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class NavigationBar extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        return(<>
        <Navbar  className="m-2 p-1">
            <Nav>
                <Nav.Item className="pl-md">
                    <h3>Uplift</h3>
                </Nav.Item>
            </Nav>
            <Nav variant="dark" fixed="top" className="ml-auto pr-md" activeKey="1">
                <Nav.Item >
                    <ButtonToolbar>
                        <Link to="/appointments"><Button variant="outline-dark" className="m-2">Appointment List</Button></Link>
                        <Link to="/patient"><Button variant="outline-dark" className="m-2">My Profile</Button></Link>
                        <Link to="/"><Button variant="outline-dark" className="m-2">Logout</Button></Link>
                    </ButtonToolbar>
                </Nav.Item>
            </Nav>
        </Navbar>
        </>)
    }

}