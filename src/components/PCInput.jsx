import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

class PCInput extends Component {


	constructor(props){
		super(props);
	}


	render() {
		return (
			<div>
				<FontAwesomeIcon icon={faMinusCircle} onClick={() => this.props.removePseudo(this.props.pseudo)} />
				<input defaultValue={this.props.pseudo} onKeyPress={this.props.addPseudo} /> 
			</div>
		)
	}
}

export default PCInput;