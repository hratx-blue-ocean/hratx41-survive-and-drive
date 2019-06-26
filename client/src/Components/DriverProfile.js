import React, { Component } from 'react';
import { Image, Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import DriverSchedule from './DriverSchedule.js';
import NavigationBar from './NavigationBar.js';

export default class DriverProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            image: 'https://via.placeholder.com/150',
            name: 'name',
            biography: 'nifandslfnasjdnafjkenwklfanelnafk;dsnafkjndsckdsanpfsda',
            zip: 'zip code',
            vehicleInfo: ['ford taurus', '22s'],
            schedule: ['Monday', 'Tuesday', "wed", 'thurs', 'fri', 'sat', 'sun']
        }
    }

    componentDidMount() {
        //axios request to get user information
    }

    render() {
        return(
            <>
            <NavigationBar />
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Image src={this.state.image} className="img-thumbnail"/>
                        </Row>
                        <Row>
                            <div>
                                <h4>Vehicle Specifications</h4>
                            <ListGroup>
                                {this.state.vehicleInfo.map((info, index) => <ListGroupItem key={index}>{info}</ListGroupItem>)}
                            </ListGroup>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <div>
                            <h1>{this.state.name}</h1>
                            <p>{this.state.biography}</p>
                        </div>
                        <DriverSchedule schedule={this.state.schedule}/>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}