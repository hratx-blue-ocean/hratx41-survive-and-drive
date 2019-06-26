import React, { Component } from 'react';
import { Row, Col, FormControl, Button, Modal, InputGroup, Container } from 'react-bootstrap';
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
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <InputGroup >
                                <FormControl placeholder="Zip Code" onChange={this.handleZipInput}/>
                                <InputGroup.Append>
                                <Button variant="outline-secondary" onClick={this.handleZipSubmit}>Submit</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Appointments appointments={this.state.appointments}/>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}