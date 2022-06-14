import React from 'react';

//Simple toggle to change gender for example a form.


export default class FirstComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gender: "Mister"
		};
		this.handelChange = this.handelChange.bind(this);
	}

	handleClick = (e) => {
		this.setState(state => this.state.gender);
		console.log("ok handleClick");
	};

	handelChange = () => {
		this.setState(state => !this.state.gender);
		console.log("ok handelChange");
	};

	render() {
		const {gender} = this.state;

		return (
			<div>

				<h2 onChange={this.handleChange}>
					{!gender ? "Madam" : "Mister"}
				</h2>

				<button type="button" onClick={(e) => this.handleClick(e)}>
					Change Gender
				</button>

			</div>

		);
	}
}