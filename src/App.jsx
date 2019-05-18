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


//should be part of redux store in future
const COMMENT_FORMATS = {
	javascript: {
		start: "//",
		end: ""
	}
};

//candidate for context?

const options = {
	lineNumbers: true,
	showCursorWhenSelecting: true
};

class App extends Component {
	constructor(){
		super();
		this.state = {
			view: "Title",
			pseudos: [],
			fullCode: "",
			mode: 'javascript',
			theme: 'midnight'

		}
		this.addPseudo = this.addPseudo.bind(this);
		this.removePseudo = this.removePseudo.bind(this);
		this.switchToPCView = this.switchToPCView.bind(this);
		this.switchToTextEditorView = this.switchToTextEditorView.bind(this);

		// for the text editor to preserve its value
		// text-block view an option after codeeditor? Only after save
		// break on the newlines?
		this.formatComment = this.formatComment.bind(this);
		this.constructValueFromProps = this.constructValueFromProps.bind(this);
		this.updateStateValue = this.updateStateValue.bind(this);
	};

	////////////////////////////// CRUD ///////////////////////////////////

	addPseudo(event){
			if (event.key === 'Enter'){
				let pseudo = event.target.value;
				this.setState(state => { 
					let pseudos = state.pseudos.concat(pseudo) 
					return { pseudos };
				});				
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

    ///////////////// CENTRALIZED TEXT EDITOR FUNCTIONS ///////////////////

    formatComment(comment){
		let startComment = COMMENT_FORMATS[this.state.mode].start;
		let endComment = COMMENT_FORMATS[this.state.mode].end ? COMMENT_FORMATS[this.state.mode].end : null;

		comment = startComment + " " + comment;
		if (endComment) comment = comment + " " + endComment;

		return comment;
	}

    updateStateValue(typedValue){
		this.setState({
			fullCode: typedValue
		})
	}

	constructValueFromProps(valueArray) {
		let fullCommentString = '';
		for (let comment of valueArray){
			fullCommentString = fullCommentString.concat(this.formatComment(comment)) + '\n';
		}
		return fullCommentString;
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


    render(){

		//////////////// OPTIONS ///////////////////

		options.mode = this.state.mode;
		options.theme = this.state.theme;

    	/////////// CONDITIONAL RENDER ////////////

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
			    	  	    options={options}
			    	  	    fullCode={this.state.fullCode}
			    	  	    switchToPCView={this.switchToPCView}
			    	  	    formatComment={this.formatComment}
			    	  	    constructValueFromProps={this.constructValueFromProps}
			    	  	    updateStateValue={this.updateStateValue}
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
