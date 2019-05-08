import React, { Component } from 'react';

class PCInputContainer extends Component {
	constructor(props){
		//ensures props are defined at componentDidMount
		super(props);
		//initializes state
		this.state = {}
		//bind event handlers to this instance
	}

	render() {
		return (
			<div>
				<h1>PseudoCode Input Container </h1>
			</div>
		)
	}
}

export default PCInputContainer;

