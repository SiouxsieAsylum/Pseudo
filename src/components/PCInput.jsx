import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { thisExpression } from '@babel/types';

class PCInput extends Component {


	constructor(props){
		super(props);
		this.state = {
			inputVal: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmission = this.handleSubmission.bind(this);
	}

	handleChange = (event) => {
		let value = event.target.value
		this.setState({
			inputVal: value
		})
	}

	handleSubmission(event){
		let newPseudo = event.target.value;
		let key = event.key;
		let eventType = event.type;
		let index = this.props.pseudoIndex;

		if ((key && key === 'Enter') || (!key && eventType === 'blur' )){
			if (newPseudo.length){
				if (this.props.pseudo){
					this.props.editPseudo(index, newPseudo)
				} else {
					this.props.addPseudo(newPseudo);
					event.target.value = '';
				}
			}
		}
	}

	render() {
		return (
			<div className="single-input-container">
				<FontAwesomeIcon icon={faMinusCircle} onClick={() => this.props.removePseudo(this.props.pseudoIndex)} />
				<input defaultValue={this.props.pseudo}
					     onChange={this.handleChange}
						 onBlur={this.handleSubmission} 
						 onKeyPress={this.handleSubmission} /> 
			</div>
		)
	}
}

export default PCInput;