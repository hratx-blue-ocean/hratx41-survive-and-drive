import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const Appointments = props => (
            <>
                <ListGroup>
                    {props.appointments.map((appointment, index) => <ListGroupItem key={index}>{appointment}</ListGroupItem>)}
                </ListGroup>
            </>
)

export default Appointments;