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
			question: ''
		}

		this.switchToSwitchView = this.switchToSwitchView.bind(this);
		this.setQuestion = this.setQuestion.bind(this);
	};

	///////////////////////// VIEW FUNCTIONS //////////////////////////////

	switchToSwitchView(){
    	this.setState({
    		view: 'Switch'
    	})
	}
	
	setQuestion(enteredQuestion){
		this.setState({
			question: enteredQuestion
		})
	}


    render(){
		let currentView; 

		switch (this.state.view){
			case 'Title':
				currentView = <Title 
					switchToSwitchView={this.switchToSwitchView} 
					setQuestion={this.setQuestion}
					/>
				break;
			case 'Switch':
				currentView = <SwitchContainer 
					/>
				break;
		}

		return (
			<div className="App">
				<Nav
					question={this.state.question}
					/>
				{currentView}
			</div>  	
      	);
  	}
  }

export default App;
