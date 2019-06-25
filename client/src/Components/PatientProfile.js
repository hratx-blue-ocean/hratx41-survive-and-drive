import React, { Component } from 'react';
import { Image, Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Appointments from './Appointments.js';

export default class PatientProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            image: 'https://via.placeholder.com/150',
            name: 'Name',
            zip: 'zip code',
            biography: 'jfoidpasjfipjdsapifjdsapjfpdjsafopjdsioafjodipsajfiodjsaofjdoisajfopdsnaofinpdsianfipdsnafipndsia',
            dependencies: ['wheelchair', 'oxygen tank']
        }
    }

    componentDidMount() {
        //axios request to get user information
    }

    render() {
        return(
            <>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Image src={this.state.image} class="img-thumbnail"/>
                        </Row>
                        <Row>
                            <div>
                                <h4>Vehicle Needs</h4>
                            <ListGroup>
                                {this.state.dependencies.map((dependency, index) => <ListGroupItem key={index}>{dependency}</ListGroupItem>)}
                            </ListGroup>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <div>
                            <h1>{this.state.name}</h1>
                            <p>{this.state.biography}</p>
                        </div>
                        <Appointments />
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}
                    
                    