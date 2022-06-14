import React from 'react';

//Form - toggle - localStorage.


export default class FirstComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rememberMe: false,
            gender: false,
            name: "",
            pwd: ""
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Remove = this.Remove.bind(this);
    }

    componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const name = rememberMe ? localStorage.getItem('Name') : '';
        const pwd = rememberMe ? localStorage.getItem('Password') : '';
        this.setState({ rememberMe, name, pwd });
    };

    handleClick = (e) => {
        this.setState({gender: !this.state.gender});
    };

    handleChangeName = (e) => {
        this.setState({name: e.target.value});
        //console.log(e.target.value)
    };

    handleChange = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.type === 'checkbox' ? input.checked : input.value
        })
    };

    handleFormSubmit = () => {
        const { rememberMe, name, pwd } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('Name', name);
        localStorage.setItem('Password', pwd);
        alert("Look at your local storage ! (Click remove to clear data)");
    };

    Remove = () => {
        localStorage.removeItem('rememberMe')
        localStorage.removeItem('Name');
        localStorage.removeItem('Password');
        alert("Don't forget to deactivate rememberMe !")
    };

    render() {
        const {gender, name, pwd} = this.state;

        return (
            <>
                <h1>FirstComponent (Form)</h1>
                
                <form onSubmit={this.handleFormSubmit}>

                    <div className="gender--class">
                        <h4 value={gender}>
                            Gender: {gender ? "Madam" : "Mister"}
                        </h4>

                        <button type="button" onClick={(e) => this.handleClick(e)}>
                            Change Gender
                        </button>
                    </div>

                    <div className="name--class">
                        <h4>
                            Enter your name :
                        </h4>

                        <input
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e) => this.handleChangeName(e)}
                            placeholder="Name"
                            required />
                    </div>

                    <div className="password--class">
                        <label>
                            <h4>Password:</h4>
                            <input
                                name='password'
                                type="password"
                                placeholder="Password"
                                value={pwd}
                                onChange={(e) => this.setState({pwd: e.target.value})}
                                required />
                        </label>
                    </div>

                    <div className="verifyname--class">
                        <h4 value={name}>
                            Verify your name : {name}
                        </h4>

                    </div>

                    <div className="verifypasswd--class">
                        <h4 value={pwd}>
                            Verify your password: {pwd}
                        </h4>
                    </div>

                    <hr/>

                    <div className="remember--class">

                        <label className='lbl--input'>
                            <input
                                name="rememberMe"
                                type="checkbox"
                                checked={this.state.rememberMe}
                                onChange={this.handleChange} />
                            <h5>
                                Remember me
                            </h5>
                        </label>
                        
                        <p>Name: {localStorage.getItem('Name')}</p>
                        <p>Password: {localStorage.getItem('Password')}</p>
                        
                        <div className="submitremove--class">
                            <button type="submit" className='btn--submit'>Sign In</button>
                            <button
                                onClick={this.Remove}
                                className='btn--remove'
                            >
                                Remove
                            </button>

                        </div>
                    </div>
                </form>
            </>
        );
    }
}
