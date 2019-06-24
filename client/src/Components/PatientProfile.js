import React, { Component } from 'react';

export default class DriverProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            image: 'http://lorempixel.com/640/480/cats',
            name: 'name',
            zip: 'zip code',
            dependencies: ['wheelchair', 'oxygen tank']
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
                <div>{this.state.dependencies.map((dependency, index) => <div key={index}>{dependency}</div>)}</div>
            </div>
            </>
        )
    }
}