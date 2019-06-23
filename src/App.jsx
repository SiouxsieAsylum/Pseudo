/////////////////////// IMPORTS /////////////////////////////////
/////////////////// IMPORTS - NPM ///////////////////////////////

import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import  CodeMirror from 'react-codemirror';

/////////////// IMPORTS - COMPONENTS ////////////////////////////

import Nav from './components/Nav'
import Title from './components/Title'
import SwitchContainer from './components/SwitchContainer'


/////////////////// IMPORTS - CSS //////////////////////////////

import './reset.css';
import './App.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/midnight.css';


//////////////////// IMPORTS - JS //////////////////////////////

import 'codemirror/mode/javascript/javascript.js'


/////////////////// COMPONENT - APP /////////////////////////


class App extends Component {
	constructor(){
		super();
		this.state = {
			view: "Title",
		}

		this.switchToSwitchView = this.switchToSwitchView.bind(this);
		// this.switchToTextEditorView = this.switchToTextEditorView.bind(this);
	};

	///////////////////////// VIEW FUNCTIONS //////////////////////////////

	switchToSwitchView(){
    	this.setState({
    		view: 'Switch'
    	})
    }

    // switchToTextEditorView(){
    // 	// in future will check if pseudo has been saved before 
    // 	// will allow you to choose view
    // 	// for now, takes you to code block
    // 	this.setState({
    // 		view: 'TextEditor'
    // 	})
    // }


    render(){
		let currentView; 

		switch (this.state.view){
			case 'Title':
				currentView = <Title switchToSwitchView={this.switchToSwitchView} />
				break;
			case 'Switch':
				currentView = <SwitchContainer />
				break;
		}

		return (
			<div className="App">
				{currentView}
			</div>  	
      	);
  	}
  }

export default App;
