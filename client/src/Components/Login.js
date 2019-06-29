import React, { Component } from 'react';
import { Form, Row, Col, Button, Modal, } from 'react-bootstrap';
import UnloggedHeader from './UnloggedHeader.js';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            type: 'survivor',
            currentUser: '',
            loggedIn: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {

        if(prevState.currentUser !== this.state.currentUser){
            const lowercase = this.state.type.toLowerCase();
            
        }
    }

    handleClick() {
        const lowercase = this.state.type.toLowerCase();
        console.log({email: this.state.email})
        axios.get(`/api/login/${lowercase}/${this.state.email}`)
        .then((response) => {
            console.log(response);
            this.setState({
                // sending a request to get the id of either a survivor or a driver to currentUser
                currentUser: response.data[`${this.state.type}_id`],
                loggedIn: true
            });
        })
        .catch(console.log)
    }



    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <>
            {/* {{pathname: `/${lowercase}`, state: {id: this.state.currentUser, type: this.state.type}}} */}
            {this.state.loggedIn && 
            <Redirect to={{ 
                pathname: `${this.state.type.toLowerCase()}s`,
                state: {
                    currentUser: this.state.currentUser, 
                    type: this.state.type
                }
            }}/>}
            <UnloggedHeader />
            <Modal.Dialog>
                <Modal.Header><b>Login</b></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Login</Form.Label>
                            <Row>
                                <Col>
                                <Form.Control name='email' className="m-1" onChange={this.handleChange} placeholder='Email'></Form.Control>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Form.Control name='password' className="m-1" type="password" onChange={this.handleChange} placeholder='Password'></Form.Control>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Type</Form.Label>
                                <Form.Control className="m-1" as='select' name='type' onChange={this.handleChange}>
                                    <option>survivor</option>
                                    <option>driver</option>
                                </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClick}>Login</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </>
        )
    }
}