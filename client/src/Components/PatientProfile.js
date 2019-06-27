import React, { Component } from 'react';
import { Image, Container, Nav, Navbar, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Appointments from './Appointments.js';
import NavigationBar from './NavigationBar';

export default class PatientProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '2',
            image: 'https://i.pravatar.cc/150?img=5',
            firstName: 'Sara',
            lastName: 'Wozniac',
            zip: '78727',
            city: 'Austin', 
            state: 'TX',
            biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            dependencies: ['wheelchair', 'oxygen tank'],

            appointments: ['appointment1', 'appointment2', 'appointment3', 'yolo'],

        }
    }

    componentDidMount() {
        //axios request to get user information
        const id = this.props.location.state;
        console.log(id);
    }

    render() {
        return(
            <>
            <NavigationBar />
            <Navbar className="mx-5 mt-5 mb-2 pt-5 px-2 pb-1" bg="light">
                <Nav.Item className="ml-5 p-2" xs={6}>
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
                            <h4>Vehicle Needs</h4>
                            <ListGroup className="pr-3 py-2">
                                {this.state.dependencies.map((dependency, index) => <ListGroupItem key={index} className="m-1">{dependency}</ListGroupItem>)}
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
                            <h3>Appointments</h3>
                            <Appointments appointments={this.state.appointments}/>
                        </Container>
                    </Col>
                </Row>
            </Container>
            
            </>
        )
    }
}
                    
{/* <Row>
                    
                </Row> */}   