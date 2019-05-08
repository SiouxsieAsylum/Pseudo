// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import  CodeMirror from 'react-codemirror';


import Nav from './components/Nav'
import TextEditingContainer from './components/TextEditingContainer'
import PCInputContainer from './components/PCInputContainer'
import Title from './components/Title'

import './reset.css';
import './App.css';
import 'codemirror/lib/codemirror.css';

import 'codemirror/mode/javascript/javascript.js'

function App() {

	let options = {
		lineNumbers: true,
		showCursorWhenSelecting: true,
		mode: 'javascript'

	};

  return (
    <div className="App">
    	<Title />
    	<TextEditingContainer />
      	<PCInputContainer />
      	<CodeMirror value="console.log('Hello, World!')" options={options}/>
    </div>
  );
}

export default App;
