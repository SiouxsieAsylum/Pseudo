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
			pseudos: []
		}
		this.addPseudo = this.addPseudo.bind(this);
	};

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

	render(){

		return (
	      <div className="App">
	    	  <Title />
	    	  <TextEditingContainer/>
	      	  <PCInputContainer
	      	  	  pseudos={this.state.pseudos}
	    		  addPseudo={this.addPseudo} 
	      	  	/>
	      </div>  	
      	);
  	}
  }

export default App;
