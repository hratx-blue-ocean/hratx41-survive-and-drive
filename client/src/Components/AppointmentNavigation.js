import React, { Component } from 'react';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import Appointments from './Appointments.js';
// import '../Styles/AppointmentNavigationStylesheet.css';

export default class AppointmentNavigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            zip: '',
            appointments: ['appointment1', 'appointment2', 'appointment3', 'appointment4'],
        }
        this.handleZipInput = this.handleZipInput.bind(this);
        this.handleZipSubmit = this.handleZipSubmit.bind(this);
    }

    componentDidMount() {
        //axios request to get all appointments within that zip code
    }

    handleZipInput(e) {
        e.preventDefault();
        this.setState({
            zip: e.target.value,
        });
    }

    handleZipSubmit() {
        //axios request to get all appointments within that zip code
    }

    render() {
        return (
            <>
            <Modal.Dialog size='xl' className='modal-appt-navigation'>
                <Modal.Header>
                    <Modal.Title>
                        Available Appointments
                    </Modal.Title>
                </Modal.Header>
            <Row>
                <Col>
                    <Form.Control onChange={this.handleZipInput} placeholder='Zip Code' style={{
                        marginTop: 10,
                        width: 100,
                        height: 30
                    }}></Form.Control>
                </Col>
                <Col>
                    <Button onClick={this.handleZipSubmit}>Submit</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Appointments appointmentList={this.state.appointments}/>
                </Col>
            </Row>
            </Modal.Dialog> 
            </>
        )
    }
}