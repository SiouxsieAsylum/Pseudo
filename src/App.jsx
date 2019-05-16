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

class App extends Component {
	constructor(){
		super();
		this.state = {
			view: "Title",
			pseudos: []
		}
		this.addPseudo = this.addPseudo.bind(this);
		this.removePseudo = this.removePseudo.bind(this);
		this.switchToPCView = this.switchToPCView.bind(this);
		this.switchToTextEditorView = this.switchToTextEditorView.bind(this);
	};




	////////////////////////////// CRUD ///////////////////////////////////

	addPseudo(event){
			if (event.key === 'Enter'){
				let pseudo = event.target.value;
				this.setState(state => { 
					let pseudos = state.pseudos.concat(pseudo) 
					return { pseudos };
				});
				//lost one lost whn switching views
				
				event.target.value = ""
			}
    }

    removePseudo(comment){
		this.setState(state => {
			let pseudos = state.pseudos.filter((saved) => {
				return saved !== comment;
			})
			return { pseudos }
		})
    }

	///////////////////////// VIEW FUNCTIONS //////////////////////////////

	switchToPCView(){
    	this.setState({
    		view: 'PCInput'
    	})
    }

    switchToTextEditorView(){
    	// in future will check if pseudo has been saved before 
    	// will allow you to choose view
    	// for now, takes you to code block
    	this.setState({
    		view: 'TextEditor'
    	})
    }

    /////////////////////// CONDITIONAL RENDER ////////////////////////////
    render(){

    	let stateView = this.state.view;
    	let currentView;

    	//switch statements do not work
		if (stateView === "Title") {
				currentView = <Title 
							switchToPCView={this.switchToPCView}
							/>
		} else if (stateView === 'PCInput') {
				currentView = <PCInputContainer
			      	  	    pseudos={this.state.pseudos}
			    		    addPseudo={this.addPseudo}
			    		    removePseudo={this.removePseudo} 
			    		    switchToTextEditorView={this.switchToTextEditorView}
			      	  		/>
		} else if (stateView === 'TextEditor') {

				currentView = <TextEditingContainer
			    	  	    pseudos={this.state.pseudos}
			    	  	    switchToPCView={this.switchToPCView}
			    	  		/>
		}



	
		return (
			<div className="App">
				{currentView}
			</div>  	
      	);
  	}
  }

export default App;
