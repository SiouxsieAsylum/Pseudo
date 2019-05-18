import React, { Component } from 'react';
import  CodeMirror from 'react-codemirror';



class CodeEditorBlock extends Component {
	constructor(props){
		super(props);
	};


	render() {


		return (
	      		<div className="code-mirror block-size">
      				<CodeMirror defaultValue={this.props.pseudo ? this.props.formatComment(this.props.pseudo) : null} 
      					options={this.props.options}/>
	      		</div>
		)
	}
}

export default CodeEditorBlock;