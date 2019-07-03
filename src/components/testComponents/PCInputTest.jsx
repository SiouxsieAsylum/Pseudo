import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { thisExpression } from '@babel/types';

import hotkeys from 'hotkeys-js';
import axios from 'axios';

class PCInput extends Component {


	constructor(props){
		super(props);
		this.state = {
			inputVal: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmission = this.handleSubmission.bind(this);
	    this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleChange = (event) => {
		let value = event.target.value
		this.setState({
			inputVal: value
		}, () => {
			this.props.lastPseudo(this.state.inputVal)
		});
	}

	handleSubmission(event){
		hotkeys('ctrl+/,ctrl+.', function(e,handler) {
		  console.log(e,handler);
		  switch(handler.key){
		    case "ctrl+/":alert('create child!');break;
		    case "ctrl+.":alert('back to parent!');break;
		  }
		});

		// let pseudo = event.target.value;
		let pseudo = this.state.inputVal;
		let interPseudo = this.props.pseudo;
		let key = event.key;
		let index = this.props.pseudoIndex;

		if (key === 'Enter'){
			if (interPseudo){
				this.props.editPseudo(index, interPseudo)
			} else {
				this.props.addPseudo(pseudo);
				event.target.value = '';
			}
		}
		if (key === 'Tab'){
			// CREATE CHILD FIELD
		}
	}
	handleFormSubmit(event){
		console.log(event)
		event.preventDefault();
	    axios.post('/data', {
	        title: this.state.inputVal
	    }).then(res => {
	      console.log(res);
	    }).catch(err => console.log(err));
	}

	render() {
		return (
			<div className="single-input-container">
				<form method="POST" onSubmit={this.handleFormSubmit}>	
					<FontAwesomeIcon icon={faMinusCircle} onClick={() => this.props.removePseudo(this.props.pseudoIndex, this.props.axID)} />
					
					<input name="comment" defaultValue={this.props.pseudo}
						onChange={this.handleChange}
						//  onBlur={() => this.props.addPseudo} 
						onKeyPress={this.handleSubmission} 
					/>
				</form>
			</div>
		)
	}
}

export default PCInput;