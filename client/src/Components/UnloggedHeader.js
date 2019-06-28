import React, { Component } from 'react';
import { Nav, Button, ButtonToolbar, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class UnloggedHeader extends Component {
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
                    <h3>Fighter Flight</h3>
                </Nav.Item>
            </Nav>
            <Nav variant="dark" fixed="top" className="ml-auto pr-md" activeKey="1">
                <Nav.Item >
                    <ButtonToolbar>
                        <Link to='/login'><Button variant="outline-dark" className="m-2" onClick={this.props.login}>Login</Button></Link>
                        <Link to='/signup'><Button variant="outline-dark" className="m-2" onClick={this.props.signup}>Signup</Button></Link>
                    </ButtonToolbar>
                </Nav.Item>
            </Nav>
        </Navbar>
        </>)
    }

}