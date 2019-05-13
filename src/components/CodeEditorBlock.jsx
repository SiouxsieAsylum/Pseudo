import React, { Component } from 'react';
import  CodeMirror from 'react-codemirror';

const COMMENT_FORMATS = {
	javascript: {
		start: "//",
		end: ""
	}
};

class CodeEditorBlock extends Component {
	constructor(props){
		super(props);
		this.state = {
			mode: 'javascript',
			theme: 'midnight'
		}

		this.formatComment = this.formatComment.bind(this);
	};

	formatComment(comment){
		let startComment = COMMENT_FORMATS[this.state.mode].start;
		let endComment = COMMENT_FORMATS[this.state.mode].end ? COMMENT_FORMATS[this.state.mode].end : null;

		comment = startComment + " " + comment;
		if (endComment) comment = comment + " " + endComment;

		return comment;
	}

	render() {

		let options = {
			lineNumbers: true,
			showCursorWhenSelecting: true,
			mode: this.state.mode,
			theme: this.state.theme
		};


		return (
	      		<div className="code-mirror-sizer">
      				<CodeMirror defaultValue={this.props.pseudo ? this.formatComment(this.props.pseudo) : null} options={options}/>
	      		</div>
		)
	}
}

export default CodeEditorBlock;