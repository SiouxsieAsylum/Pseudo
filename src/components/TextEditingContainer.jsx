import React, { Component } from 'react';
import CodeBlockContainer from './CodeBlockContainer'
import CodeEditorContainer from './CodeEditorContainer'

class TextEditingContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			editorVersion: 'editor',
		}
	}

	render() {

		/////////////// VIEW STATE /////////////////

		let viewState = this.state.editorVersion;
		let view;

		if (viewState === 'block') {
			view = <CodeBlockContainer 
					options={this.props.options}
					pseudos={this.props.pseudos} 
					formatComment={this.props.formatComment}
					/>
		} else if (viewState === 'editor') {
			view = <CodeEditorContainer 
					options={this.props.options}
					pseudos={this.props.pseudos}
					fullCode={this.props.fullCode}
					constructValueFromProps={this.props.constructValueFromProps}
			    	updateStateValue={this.props.updateStateValue} 
			    	formatComment={this.props.formatComment}
					/>
		}


		return (
			<div className="outer-code-container">				
				<div className="centered-container content-container inner-code-container">
					{view}
				</div>
				<button className="view-switch-button" onClick={this.props.switchToPCView}>To PC View</button>

			</div>

		)
	}
}

export default TextEditingContainer;