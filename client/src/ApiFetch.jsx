import React, { Component } from 'react';
var lat = 40.730610;
var lon = -73.935242;

class ApiFetch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }



componentDidMount() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q&lat='+lat+'&lon='+lon+'&appid=0282671f74388449f4d4c1e0b2dbe75e&units=imperial')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            items: json,
        })
    });
}

render() {
    var {isLoaded, items} = this.state;
    if(!isLoaded) {
        return <div>Loading...</div>;
    }
    else {
        console.log (items);
    }
}
}

export default ApiFetch;