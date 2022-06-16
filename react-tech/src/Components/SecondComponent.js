import React from 'react';
import axios from 'axios';


class SecondComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serverResponse : [],
            rules: true
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
        this.setState({rules: !this.state.rules});
    }

    render() {
        return (
            <div className="second--class">

                <h2>
                    SecondComponent (API)
                </h2>

                <div className="mainsec--div">

                    <div id="rules--div">

                        {!this.state.rules && <h3>{this.state.rules ? "Name" : "Name & Username"}</h3>}
                        {this.state.rules && <h3>{this.state.rules ? "Name" : "Name & Username"}</h3>}

                    </div>
                    <div id="server--div">

                        { this.state.serverResponse.map(( serverRes )=> {
                            if (this.state.rules) {
                                return (
                                    <p key={serverRes.id}>{serverRes.name}</p>
                                )
                            }
                            else {
                                return (
                                    <p key={serverRes.id}>{serverRes.name} = {serverRes.username}</p>
                                )
                            }
                        })}

                        <button onClick={this.callServer}>
                            {this.state.rules ? "User Name":"Only Name"}
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}

export default SecondComponent;
