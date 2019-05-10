import React, { Component } from 'react';
import CodeBlockContainer from './CodeBlockContainer'
import CodeEditorContainer from './CodeEditorContainer'

class TextEditingContainer extends Component {
	constructor(props){
		//ensures props are defined at componentDidMount
		super(props);
		//initializes state
		this.state = {
			editorVersion: 'block',
			comments: ["hello"]
		}
		//bind event handlers to this instance
	}

	render() {

		let viewState = this.state.editorVersion;
		let view;

		if (viewState === 'block') {
			view = <CodeBlockContainer 
					comments="this.state.comments" />
		}else {
			view = <CodeEditorContainer />
		}

		return (

			<div>
				{view}
			</div>
		)
	}
}

export default TextEditingContainer;