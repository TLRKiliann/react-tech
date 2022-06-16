import React from 'react';
import axios from 'axios';
//import {useState, useEffect} from 'react';


class SecondComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serverResponse : []
        };
        this.callServer = this.callServer.bind(this);
    }
    
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                /*console.log(response.data[0].id)
                console.log(response.data[0].name)
                console.log(response.data[0].username)*/
                const serverResponse = response.data;
                this.setState({ serverResponse })
            })
           .catch(err => {
               console.log(err);
               return null;
            })
    };

    callServer = () => {
        this.setState({ serverResponse : this.state.serverResponse.map(( serverRes )=> {
            return (
                <p key={serverRes.id}>{serverRes.username}</p>)
            })})
    }

    render() {
        return (
            <div className="second--class">
                <h2>
                    SecondComponent (API)
                </h2>

                <div>

                    { this.state.serverResponse.map(( serverRes )=> {
                        return (
                            <p key={serverRes.id}>{serverRes.name}</p>)
                    })}
                    

                    <button onClick={this.callServer}>
                        User Name
                    </button>
                </div>

            </div>
        );
    }
}

export default SecondComponent;
