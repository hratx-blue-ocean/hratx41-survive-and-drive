import React, { Component } from 'react';


export default class CreateAppointment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            start: '',
            end: '',
            address: '',
            city: '',
            state: '',
            zip: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState = {
            [event.target.name]: e.target.value
        }
    }

    handleSubmit() {
        //sends post to db to create appointment
    }

    render() {
        return(
            <>
            <form>
                Start: <br></br>
                <input name='start' onChange={this.handleChange}></input>
                End: <br></br>
                <input name='end' onChange={this.handleChange}></input>
                Address: <br></br>
                <input name='address' onChange={this.handleChange}></input>
                City: <br></br>
                <input name='city' onChange={this.handleChange}></input>
                State: <br></br>
                <input name='state' onChange={this.handleChange}></input>
                Zip Code: <br></br>
                <input name='zip' onChange={this.handleChange}></input>
            </form>
            <button onClick={this.handleSubmit}>{this.handleSubmit}</button>
            </>
        )
    }
}