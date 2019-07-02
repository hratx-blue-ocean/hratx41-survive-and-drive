import React, { Component } from 'react';
import { Button, Form , Row, Col, Modal } from 'react-bootstrap';
import UnloggedHeader from './UnloggedHeader.js';
import axios from 'axios';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            wheelChair: true,
            oxygen: true,
            addressLineOne: '',
            addressLineTwo: '',
            addressCity: '',
            addressState: '',
            addressZipCode: '',
            email: '',
            phoneNumber: '',
            type: 'survivor',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        const value = e.target.value
        const name = e.target.name
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        // e.preventDefault();
        const lowercase = this.state.type.toLowerCase();
        axios.post(`/api/users/${lowercase}s`, this.state)
        .then(console.log)
        .catch(console.log)
    }



    render() {
        return (
            <>
            <UnloggedHeader />
            <Modal.Dialog>
                <Modal.Header><b>Sign Up</b></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Control name='firstName' className="m-1" onChange={this.handleChange} placeholder='First Name' />
                                    </Col>
                                    <Col>
                                        <Form.Control name='lastName' className="m-1" onChange={this.handleChange} placeholder='Last Name' />
                                    </Col>
                                </Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Control name='addressLineOne' className="m-1" onChange={this.handleChange} placeholder='Address Line 1' />
                                    </Col>
                                    <Col>
                                        <Form.Control name='addressLineTwo' className="m-1" onChange={this.handleChange} placeholder='Address Line 2' />
                                    </Col>
                                </Row>    
                                <Row>
                                    <Col>
                                        <Form.Control name='addressCity' className="m-1" onChange={this.handleChange} placeholder='City' />
                                    </Col>
                                    <Col>
                                        <Form.Control name='addressState' className="m-1" onChange={this.handleChange} placeholder='State' />
                                    </Col>
                                    <Col>
                                        <Form.Control name='addressZipCode' className="m-1" onChange={this.handleChange} placeholder='Zip Code' />
                                    </Col>
                                </Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Control name='phoneNumber' className="m-1" onChange={this.handleChange} placeholder='Phone Number' />
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
                        <Form.Group>
                            <Form.Label>Login</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Control name='email' className="m-1" onChange={this.handleChange} placeholder='Email' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Control name='password' type="password" className="m-1" onChange={this.handleChange} placeholder='Password' />
                                    </Col>
                                </Row>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </>
        )
    }
}

