import React, { Component } from 'react';
import { Image, Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Appointments from './Appointments.js';
import NavigationBar from './NavigationBar';
import axios from 'axios';

export default class PatientProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '1',
            image: 'https://via.placeholder.com/150',
            name: 'Name',
            zip: 'zip code',
            biography: 'jfoidpasjfipjdsapifjdsapjfpdjsafopjdsioafjodipsajfiodjsaofjdoisajfopdsnaofinpdsianfipdsnafipndsia',
            dependencies: ['wheelchair', 'oxygen tank'],

            appointments: ['appointment1', 'appointment2', 'appointment3', 'yolo'],

        }
    }

    componentDidMount() {
        // //axios request to get user information
        // const id = this.props.location.state
        // // console.log(id)
        axios.get(`/api/users/survivors/${this.state.id}`)
        .then((response) => {
            console.log(response.data)
            this.setState({
                name: response.data.firstname + ' ' + response.data.lastname,
                image: response.data.photolink,
            });
        })
        .catch((error) => console.log(error));
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
                        <Appointments appointments={this.state.appointments}/>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}
                    
                    