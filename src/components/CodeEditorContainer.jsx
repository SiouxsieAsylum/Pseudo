import React, { Component } from 'react';
import CodeEditor from './CodeEditor';

class CodeEditorContainer extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="code-mirror editor-size">
				<CodeEditor 
					options={this.props.options}
					pseudos={this.props.pseudos} 
					fullCode={this.props.fullCode}
					constructValueFromProps={this.props.constructValueFromProps}
			    	updateStateValue={this.props.updateStateValue} 
					formatComment={this.props.formatComment}
					/>
			</div>
		)
	}
}

export default CodeEditorContainer;
