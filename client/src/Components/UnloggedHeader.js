import React, { Component } from 'react';
import { Nav, Button, ButtonToolbar, Navbar, Image } from 'react-bootstrap';
import '../Styles/Header.scss';


export default class UnloggedHeader extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        return(<>
        <Navbar  className="px-5 header" sticky="top">
            <Nav>
            <Navbar.Brand href="/"><Image src="./logo.png" width="150px"></Image></Navbar.Brand>
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