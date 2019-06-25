import React, { Component } from 'react';
import { Button, Form , Row, Col, Modal } from 'react-bootstrap';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            phone: '',
            type: '',
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

    handleSubmit() {
        //axios post for state info
        
    }

    render() {
        return (
            <>
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
                                        <Form.Control name='address1' className="m-1" onChange={this.handleChange} placeholder='Address Line 1' />
                                    </Col>
                                    <Col>
                                        <Form.Control name='address2' className="m-1" onChange={this.handleChange} placeholder='Address Line 2' />
                                    </Col>
                                </Row>    
                                <Row>
                                    <Col>
                                        <Form.Control name='city' className="m-1" onChange={this.handleChange} placeholder='City' />
                                    </Col>
                                    <Col>
                                        <Form.Control name='state' className="m-1" onChange={this.handleChange} placeholder='State' />
                                    </Col>
                                    <Col>
                                        <Form.Control name='zip' className="m-1" onChange={this.handleChange} placeholder='Zip Code' />
                                    </Col>
                                </Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Type</Form.Label>
                                <Form.Control className="m-1" as='select'>
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
                                        <Form.Control name='password' className="m-1" onChange={this.handleChange} placeholder='Password' />
                                    </Col>
                                </Row>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onSubmit={this.handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </>
        )
    }
}

