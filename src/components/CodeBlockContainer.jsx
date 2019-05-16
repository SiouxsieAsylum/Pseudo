import React, { Component } from 'react';
import CodeEditorBlock from './CodeEditorBlock';

class CodeBlockContainer extends Component {
	constructor(props){
		//ensures props are defined at componentDidMount
		super(props);
		//initializes state
		this.state = {}
		//bind event handlers to this instance
	};

	render() {
		return (
			<div className="centered-container content-container">

				{this.props.pseudos.map(comment => {
					return <CodeEditorBlock 
						key={this.props.pseudos.indexOf(comment)}
						pseudo={comment}
						/>
				})}
				<CodeEditorBlock 
					/>
      		</div>
		)
	}
}

export default CodeBlockContainer;