import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';


export default class CreateAppointment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            start: '',
            end: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
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
        //sends post to db to create appointment
    }

    render() {
        return(
            <>
            <Form>
                <Form.Group>
                    <Form.Label>Appointment Times</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control name='start' onChange={this.handleChange} placeholder='Start Time'></Form.Control>
                        </Col>
                        <Col>
                            <Form.Control name='end' onChange={this.handleChange} placeholder='End Time'></Form.Control>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Appointment Address</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control name='address1' onChange={this.handleChange} placeholder='Address Line 1'></Form.Control>
                        </Col>
                        <Col>
                            <Form.Control name='address2' onChange={this.handleChange} placeholder='Address Line 2'></Form.Control>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control name='city' onChange={this.handleChange} placeholder='City'></Form.Control>
                        </Col>
                        <Col>
                            <Form.Control name='state' onChange={this.handleChange} placeholder='State'></Form.Control>
                        </Col>
                        <Col>
                            <Form.Control name='zip' onChange={this.handleChange} placeholder='Zip Code'></Form.Control>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            <Button onSubmit={this.handleSubmit}>Submit</Button>
            </>
        )
    }
}