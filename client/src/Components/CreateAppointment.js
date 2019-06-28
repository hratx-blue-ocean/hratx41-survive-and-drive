import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';


export default class CreateAppointment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            survivor_id: 1,
            appointmentTime: '',
            pickupTime: '',
            locationName: '',
            addressLineOne: '',
            addressLineTwo: '',
            addressCity: '',
            addressState: '',
            addressZipCode: '',
            toFromBoth: 'both',
            dates: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit() {
        axios.post('/api/appointments', this.state)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    render() {
        return(
            <>
            <Form>
                <Form.Group>
                    <Form.Label>Appointment Times</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control name='appointmentTime' onChange={this.handleChange} placeholder='Start Time'></Form.Control>
                        </Col>
                        <Col>
                            <Form.Control name='pickupTime' onChange={this.handleChange} placeholder='End Time'></Form.Control>
                        </Col>
                        <Col>
                            <Form.Control name='dates' onChange={this.handleChange} placeholder='Date'></Form.Control>
                        </Col>
                        <Col>
                            <Form.Control name='toFromBoth' onChange={this.handleChange} placeholder='both'></Form.Control>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Appointment Address</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control name='locationName' onChange={this.handleChange} placeholder='Location Name'></Form.Control>
                        </Col>
                        <Col>
                            <Form.Control name='addressLineOne' onChange={this.handleChange} placeholder='Address Line 1'></Form.Control>
                        </Col>
                        <Col>
                            <Form.Control name='addressLineTwo' onChange={this.handleChange} placeholder='Address Line 2'></Form.Control>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control name='addressCity' onChange={this.handleChange} placeholder='City'></Form.Control>
                        </Col>
                        <Col>
                            <Form.Control name='addressState' onChange={this.handleChange} placeholder='State'></Form.Control>
                        </Col>
                        <Col>
                            <Form.Control name='addressZipCode' onChange={this.handleChange} placeholder='Zip Code'></Form.Control>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            <Button onClick={this.handleSubmit}>Submit</Button>
            </>
        )
    }
}