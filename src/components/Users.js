import React, { Component } from 'react';


export default class Users extends Component {

    state = {
        results: []
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState(data);
            })
    }
    render() {

        return (
            <div className="users-container">
                {this.state.results.map(item => (
                    <div key={item.login.uuid} className="user-card">
                        <div>
                            <img className="user-pic"src={item.picture.large}></img>
                        </div>
                        <div className="user-card-data">
                            <div>
                                <p>Imię: {item.name.first}</p>
                            </div>
                            <div>
                                <p>Nazwisko: {item.name.last}</p>
                            </div>
                            <div>
                                <p>Email: {item.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}



