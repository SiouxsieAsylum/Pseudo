import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { thisExpression } from '@babel/types';

import { HotKeys } from "react-hotkeys";
import axios from 'axios';

import Child from './Child';

class PCInput extends Component {
	constructor(props){
		super(props);
		this.state = {
			inputVal: '',
			children: [],
			force: true
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmission = this.handleSubmission.bind(this);
	    this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleChange = (event) => {
		let value = event.target.value;
		if(this.props.pseudoIndex == undefined){
			this.setState({
				inputVal: value
			}, () => {
				console.log(this.state.inputVal);
				this.props.lastPseudo(this.state.inputVal)
			});
		}
	}

	handleSubmission(event){
		// let pseudo = event.target.value;
		let pseudo = this.state.inputVal;
		let input = event.target.value;
		let interPseudo = this.props.pseudo;
		let key = event.key;
		let index = this.props.pseudoIndex;

		if (key === 'Enter'){
			if (interPseudo){
				this.props.editPseudo(index, input, this.props.axID)
			} else {
				this.props.addPseudo(pseudo);
				event.target.value = '';
			}
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
	    const handlers = {
	    	'ctrl+/': (event) => {
	    		console.log('create child', event);
		
		    	this.setState(state => {
		    		state.children.push({
		    			child: true
		    		})
		    	}, () => {
		    		this.setState({
						force: !this.state.force
					});
		    	});
	    	}
	    };
		return (
			<div className="single-input-container">
				<form method="POST" onSubmit={this.handleFormSubmit}>	
					<HotKeys handlers={handlers} focus="true">	
						<FontAwesomeIcon icon={faMinusCircle} onClick={() => this.props.removePseudo(this.props.pseudoIndex, this.props.axID)} />
						<input placeholder="Parent" name="comment" defaultValue={this.props.pseudo}
							onChange={this.handleChange}
							//  onBlur={() => this.props.addPseudo} 
							onKeyPress={this.handleSubmission} 
						/>
					</HotKeys>
				</form>

				{this.state.children.map((item, i) => {
					console.log('item',item);
					// let regex = /\s/gi;
					// let uniqueName = item.title.replace(regex, '-');
					return <Child
						is_child={item.child}
					/>
				})}
			</div>
		)
	}
}

export default PCInput;