import React, { Component } from 'react';
import { Row, Col, FormControl, Button, Modal, InputGroup, Container, Image } from 'react-bootstrap';
import Appointments from './Appointments.js';
import NavigationBar from './NavigationBar.js'

export default class AppointmentNavigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            zip: '',
            appointments: ['appointment1', 'appointment2', 'appointment3', 'appointment4'],
            map: 'https://via.placeholder.com/450'
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
            <NavigationBar />
            <Container style={{
                marginTop: 40
            }}>
                <Row>
                    <Col>
                        <Row>
                            <InputGroup style={{
                                width: 450
                            }}>
                                <FormControl placeholder="Zip Code" onChange={this.handleZipInput}/>
                                <InputGroup.Append>
                                <Button variant="outline-secondary" onClick={this.handleZipSubmit}>Submit</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Row>
                        <Row>
                            <Image src={this.state.map} className="img-thumbnail" style={{
                                marginTop: 20
                            }}/>
                        </Row>
                    </Col>
                    <Col>
                        <Modal.Dialog style={{
                            position: "absolute",
                            marginTop: 60,
                            right: 40,
                            width: 700
                        }}>
                            <Modal.Header>Appointments Needing Drivers</Modal.Header>
                            <Modal.Body>
                                <Appointments appointments={this.state.appointments}/>
                            </Modal.Body>
                        </Modal.Dialog>
                        
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}