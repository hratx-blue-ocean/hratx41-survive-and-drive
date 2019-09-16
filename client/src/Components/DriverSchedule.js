import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const DriverSchedule = props => (
            <>
                <ListGroup>
                    {props.schedule.map((appointment, index) => <ListGroupItem key={index}>{appointment}</ListGroupItem>)}
                </ListGroup>
            </>
)

export default DriverSchedule;