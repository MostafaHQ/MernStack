import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {birthday : this.props.age};
    }
    
    getOlder = () => this.setState({birthday: this.state.birthday +1});


    render() { 
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.birthday}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.getOlder}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}
 
export default PersonCard;

