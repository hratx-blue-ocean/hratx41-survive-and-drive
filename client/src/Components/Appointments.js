import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const Appointments = props => (
            <>
                <ListGroup>
                    {props.appointments.map((appointment, index) => <ListGroupItem key={index} className="m-1">{appointment}</ListGroupItem>)}
                </ListGroup>
            </>
)

export default Appointments;