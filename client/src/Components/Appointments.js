import React, { Component } from 'react';

export default class Appointments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            appointments: [] //array of objects
        }
    }

    componentDidMount() {
        //axios request to get all appoints from this user id
        // this.setState({
        //     appointments: Response.data.appointments
        // })
    }

    render() {
        return (
            <>
            
            </>
        )
    }
}