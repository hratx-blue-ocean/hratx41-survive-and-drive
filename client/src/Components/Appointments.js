import React from 'react';
import { ListGroup, ListGroupItem, Row } from 'react-bootstrap';


const Appointments = props => (
            <>
                <ListGroup>
                    {props.appointments.map((appointment, index) => <ListGroupItem key={index} className="m-1">
                    <Row>{appointment.locationname}</Row> <Row>{appointment.appointmenttime}</Row> <Row>{appointment.pickuptime}</Row>
                    </ListGroupItem>)}
                </ListGroup>
            </>
)

export default Appointments;