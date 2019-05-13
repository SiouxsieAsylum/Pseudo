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
			<div>
				<CodeEditorBlock />
      		</div>
		)
	}
}

export default CodeBlockContainer;