import React, { Component } from 'react';

class CodeEditorContainer extends Component {
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
				<h1>Code Editor Container </h1>
			</div>
		)
	}
}

export default CodeEditorContainer;
