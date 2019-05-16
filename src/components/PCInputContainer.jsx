import React, { Component } from 'react';
import PCInput from './PCInput';

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
			<div className="pc-input-container centered-container content-container">
				{this.props.pseudos.map(comment => {
					return <PCInput 
						key={this.props.pseudos.indexOf(comment)}
						pseudo={comment}
						addPseudo={this.props.addPseudo}
						removePseudo={this.props.removePseudo}
						/>
				})}
				<PCInput 
					addPseudo={this.props.addPseudo}
					removePseudo={this.props.removePseudo}

					/>
				<button className="view-switch-button" onClick={this.props.switchToTextEditorView}>To TE View</button>
			</div>
		)
	}
}

export default PCInputContainer;

