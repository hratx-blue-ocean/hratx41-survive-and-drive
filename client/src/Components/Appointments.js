import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Appointments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            appointments: ['appointment1', 'appointment2', 'appointment3'] //array of objects
        }
    }

    componentDidMount() {
        //axios request to get all appoints from this user id
        // this.setState({
        //     appointments: response.data.appointments
        // })
    }

    render() {
        return (
            <>
                <ListGroup>
                    {this.state.appointments.map((appointment, index) => <ListGroupItem>{appointment}</ListGroupItem>)}
                </ListGroup>
            </>
        )
    }
}