import React, { Component } from 'react';
import { Form, Row, Col, Button, Modal, } from 'react-bootstrap';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            type: 'survivor',
            currentUser: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const lowercase = this.state.type.toLowerCase();
        axios.get(`/api/users/${lowercase}s`, {email: this.state.email})
        .then((response) => {
            this.setState({
                // sending a request to get the id of either a survivor or a driver to currentUser
                currentUser: response.data.row[0][`${this.state.type}_id`]
            });
        })
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
                                    <option>Survivor</option>
                                    <option>Driver</option>
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