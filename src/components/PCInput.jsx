import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

class PCInput extends Component {


	constructor(props){
		//ensures props are defined at componentDidMount
		super(props);
		//initializes state
		//bind event handlers to this instance
	}

	render() {
		return (
			<div>
				<input defaultValue={this.props.pseudo} onKeyPress={this.props.addPseudo} /> 
			</div>
		)
	}
}

export default PCInput;