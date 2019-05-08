/////////////////////// IMPORTS /////////////////////////////////
/////////////////// IMPORTS - NPM ///////////////////////////////

import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import  CodeMirror from 'react-codemirror';

/////////////// IMPORTS - COMPONENTS ////////////////////////////

import Nav from './components/Nav'
import TextEditingContainer from './components/TextEditingContainer'
import PCInputContainer from './components/PCInputContainer'
import Title from './components/Title'


/////////////////// IMPORTS - CSS //////////////////////////////

import './reset.css';
import './App.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/midnight.css'


//////////////////// IMPORTS - JS //////////////////////////////

import 'codemirror/mode/javascript/javascript.js'


/////////////////// COMPONENT - APP /////////////////////////

function App() {

	let options = {
		lineNumbers: true,
		showCursorWhenSelecting: true,
		//eventually a state
		mode: 'javascript',
		//eventually a state
		theme: 'midnight'

	};

  return (
    <div className="App">
    	<Title />
    	<TextEditingContainer />
      	<PCInputContainer />
      	 {/* height is 300 default, width is up to container */}
      	<div className="code-mirror-sizer">
      		<CodeMirror value="console.log('Hello, World!')" options={options}/>
      	</div>
    </div>
  );
}

export default App;
