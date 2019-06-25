import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            passowrd: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //creates a new record in the database for users
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <>
            <Form>
                <Form.Group>
                    <Form.Label>Login</Form.Label>
                    <Row>
                        <Col>
                          <Form.Control name='email' onChange={this.handleChange} placeholder='Email'></Form.Control>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                          <Form.Control name='password' onChange={this.handleChange} placeholder='Password'></Form.Control>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            <Button onClick={this.handleClick}>Login</Button>
            </>
        )
    }
}