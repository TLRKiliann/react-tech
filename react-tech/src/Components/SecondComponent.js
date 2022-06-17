import React from 'react';
import axios from 'axios';


class SecondComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serverResponse : [],
            validUser: true,
            email: true
        };
        this.callServer = this.callServer.bind(this);
    }
    
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log(response.data);
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
        this.setState({validUser: !this.state.validUser,
            email: true});
    }

    callMail = () => {
        this.setState({validUser: true,
            email: !this.state.email});
    }

    render() {
        return (
            <div className="second--class">

                <h2>
                    SecondComponent (API)
                </h2>

                <div className="mainsec--div">

                    <div id="validUser--div">

                        {!this.state.validUser &&
                            <h3>{this.state.validUser ? "Name" : "Name & Username"}</h3>}

                        {this.state.validUser && this.state.email &&
                            <h3>{this.state.validUser && this.state.email ? "Name" : "Name & Username"}</h3>}

                        {this.state.validUser && !this.state.email &&
                            <h3>{this.state.validUser && this.state.email ? "Name" : "Name & e-mail"}</h3>}

                    </div>
                    <div id="server--div">

                        { this.state.serverResponse.map(( serverRes )=> {
                            if (this.state.validUser && this.state.email) {
                                return (
                                    <p key={serverRes.id}>{serverRes.name}</p>
                                )
                            }
                            else if (this.state.validUser && !this.state.email) {
                                return (
                                    <table>
                                        <tr>
                                            <td key={serverRes.id} className="name--div">
                                                {serverRes.name}
                                            </td>
                                            <td className="email--div">
                                                {serverRes.email}
                                            </td>
                                        </tr>
                                    </table>
                                )
                            }
                            else {
                                return (
                                    <p key={serverRes.id}>{serverRes.name} = {serverRes.username}</p>
                                )
                            }
                        })}

                        <button id="btn--usrname" onClick={this.callServer}>
                            {this.state.validUser ? "User Name" : "Only Name"}
                        </button>

                        <button id="btn--mail" onClick={this.callMail}>
                            {this.state.email ? "e-mail" : "hide e-mail"}
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}

export default SecondComponent;
