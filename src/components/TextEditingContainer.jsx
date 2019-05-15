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
		}
		//bind event handlers to this instance
	}

	render() {

		let viewState = this.state.editorVersion;
		let view;

		if (viewState === 'block') {
			view = <CodeBlockContainer 
					pseudos={this.props.pseudos} 
					/>
		}else {
			view = <CodeEditorContainer 
					pseudos={this.props.pseudos} 
					/>
		}

		return (

			<div>
				{view}
				<button onClick={this.props.switchToPCView}>To PC View</button>
			</div>
		)
	}
}

export default TextEditingContainer;