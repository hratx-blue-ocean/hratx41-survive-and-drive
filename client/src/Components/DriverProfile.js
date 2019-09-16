import React, { Component } from 'react';
import { Image, Container, Row, Col, ListGroup, Nav, Navbar, ListGroupItem } from 'react-bootstrap';
import DriverSchedule from './DriverSchedule.js';
import NavigationBar from './NavigationBar.js';
import axios from 'axios';


export default class DriverProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: '2',
            id: '',
            image: 'https://i.pravatar.cc/150?img=12',
            firstName: 'Austin',
            lastName: 'Zook',
            zip: '78727',
            city: 'Austin', 
            state: 'TX',
            biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            vehicleInfo: ['ford taurus', '22s'],
            schedule: ['Monday', 'Tuesday', "wed", 'thurs', 'fri', 'sat', 'sun']
        }
    }

    componentDidMount() {
        const driverInfo = axios.get(`/api/users/drivers/${this.props.location.state.currentUser}`)
        const appointmentInfo = axios.get(`/api/appointments/${this.props.location.state.currentUser}`)

        Promise.all([driverInfo, appointmentInfo])

        .then((response) => {
            console.log(response[0])
            this.setState({
                firstName: response[0].data.firstname,
                lastName: response[0].data.lastname,
                image: response[0].data.photolink,

                // schedule: response[1].data
            });
        })
        .catch((error) => console.log(error));
    
    }

    render() {
        return(
            <>
            <NavigationBar />
            <Navbar className="mx-5 mt-5 mb-2 pt-5 px-2 pb-1" bg="light">
                <Nav.Item className="ml-5 pl-5 pb-2" xs={6}>
                    <Image src={this.state.image} roundedCircle ></Image>
                </Nav.Item>
                <Nav.Item className="mx-3 mt-5 mb-2">
                    <h2 className="m-0 p-0">{this.state.firstName + ' ' + this.state.lastName}</h2>
                    <p className="mt-2 mx-0 mb-0 p-0"></p>
                    <p className="m-0 p-0">{this.state.city}, {this.state.state}</p>
                </Nav.Item>
            </Navbar>
            <Container className="mt-5">
                <Row>
                    <Col xs={4}>
                        <Container className="mx-1 p-2">
                            <h4>Vehicle Specifications</h4>
                            <ListGroup className="pr-3 py-2">
                                {this.state.vehicleInfo.map((info, index) => <ListGroupItem key={index} className="m-1">{info}</ListGroupItem>)}
                            </ListGroup>
                        </Container>
                    </Col>
                    <Col xs={1}>
                    </Col>
                    <Col>
                        <Container className="mx-1 p-2">
                            <h3>About Me</h3>
                            <p>{this.state.biography}</p>
                        </Container>
                        <Container className="mx-1 p-2">
                            <h3>Available Times</h3>
                            <DriverSchedule schedule={this.state.schedule}/>
                        </Container>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}