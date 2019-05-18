import React, { Component } from 'react';
import  CodeMirror from 'react-codemirror';

class CodeEditor extends Component {
	constructor(props){
		super(props);
	};

	render() {

		const defaultValue = this.props.fullCode || this.props.constructValueFromProps(this.props.pseudos);

		return (
      		<CodeMirror 
      			defaultValue={defaultValue} 
      			options={this.props.options}
      			onChange={this.props.updateStateValue}
      			/>
		)
	}
}

export default CodeEditor;