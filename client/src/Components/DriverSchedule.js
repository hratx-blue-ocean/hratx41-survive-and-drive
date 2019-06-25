import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class DriverSchedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schedule: ['Monday', 'Tuesday', "wed", 'thurs', 'fri', 'sat', 'sun']
        }
    }

    render() {
        return (
            <>
                <ListGroup>
                    {this.state.schedule.map((appointment, index) => <ListGroupItem key={index}>{appointment}</ListGroupItem>)}
                </ListGroup>
            </>
        )
    }
}