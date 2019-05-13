import React, { Component } from 'react';
import  CodeMirror from 'react-codemirror';

class CodeEditor extends Component {
	constructor(props){
		//ensures props are defined at componentDidMount
		super(props);
		//initializes state
		this.state = {}
		//bind event handlers to this instance
	};

	render() {

		let options = {
			lineNumbers: true,
			showCursorWhenSelecting: true,
			//eventually a state
			mode: 'javascript',
			//eventually a state
			theme: 'midnight'
		};
		return (
			<div>
      	 	{/* height is 300 default, width is up to container */}
      		<div className="code-mirror-sizer">
      			<CodeMirror defaultValue={"//" + this.props.pseudo} options={options}/>
      		</div>
      	</div>
		)
	}
}

export default CodeEditor;