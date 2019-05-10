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
import 'codemirror/theme/midnight.css';


//////////////////// IMPORTS - JS //////////////////////////////

import 'codemirror/mode/javascript/javascript.js'


/////////////////// COMPONENT - APP /////////////////////////

function App() {

  return (
    <div className="App">
    	<Title />
    	<TextEditingContainer />
      	<PCInputContainer />
    </div>
  );
}

export default App;
