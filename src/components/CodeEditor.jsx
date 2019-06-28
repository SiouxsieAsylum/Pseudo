import React, { Component } from 'react';
import  CodeMirror from 'react-codemirror';

class CodeEditor extends Component {
	constructor(props){
		super(props);
	};

	render() {
		return (
      		<CodeMirror 
      			defaultValue={this.props.fullCode || this.props.constructValueFromProps(this.props.pseudos)} 
      			options={this.props.options}
      			onChange={this.props.updateStateValue}
      			/>
		)
	}
}

export default CodeEditor;