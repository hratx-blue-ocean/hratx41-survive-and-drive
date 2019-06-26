import React, { Component } from 'react';
import { Nav, Button, ButtonToolbar, Navbar } from 'react-bootstrap';


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
                        <Button variant="outline-dark" className="m-2" onClick={this.props.login}>Login</Button>
                        <Button variant="outline-dark" className="m-2" onClick={this.props.signup}>Signup</Button>
                    </ButtonToolbar>
                </Nav.Item>
            </Nav>
        </Navbar>
        </>)
    }

}