import React, { Component } from 'react';

export default class DriverProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            image: 'http://lorempixel.com/640/480/cats',
            name: 'name',
            zip: 'zip code',
            vehicleInfo: ['taurus', '24 in rims']
        }
    }

    componentDidMount() {
        //axios request to get user information
    }

    render() {
        return(
            <>
            <img src={this.state.image}></img>
            <h1>{this.state.name}</h1>
            <div>
                <div>{this.state.zip}</div>
                <div>{this.state.vehicleInfo.map((info, index) => <div key={index}>{info}</div>)}</div>
            </div>
            </>
        )
    }
}