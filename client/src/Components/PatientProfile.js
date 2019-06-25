import React, { Component } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';

export default class PatientProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            image: 'http://lorempixel.com/640/480/cats',
            name: 'name',
            zip: 'zip code',
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
                        <Image src={this.state.image}/>
                    </Col>
                    <Col>{this.state.name}</Col>
                </Row>
            </Container>
            <Container>
                <Col>
                    <Row>{this.state.zip}</Row>
                    {this.state.dependencies.map((dependency, index) => <Row key={index}>{dependency}</Row>)}
                </Col>
            </Container>
            </>
        )
    }
}