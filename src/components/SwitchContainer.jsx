import React, { Component } from 'react';
import TextEditingContainer from './TextEditingContainer'
import PCInputContainer from './PCInputContainer'

const EditorContext = React.createContext({

});
const PseudoContext = React.createContext({

});

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


class SwitchContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			switchView: 'PC',
			pseudos: [],
			fullCode: "",
			mode: 'javascript',
			theme: 'midnight'
		}
		// SWITCH EVENTS 
		this.switchToPCView = this.switchToPCView.bind(this);
		this.switchToTextEditorView = this.switchToTextEditorView.bind(this);

		// PC INPUT 
		this.addPseudo = this.addPseudo.bind(this);
		this.removePseudo = this.removePseudo.bind(this);
		this.editPseudo = this.editPseudo.bind(this);

		// TEXT EDITOR
		// for the text editor to preserve its value
		// text-block view an option after codeeditor? Only after save
		// break on the newlines?
		this.formatComment = this.formatComment.bind(this);
		this.constructValueFromProps = this.constructValueFromProps.bind(this);
		this.updateStateValue = this.updateStateValue.bind(this);
	}

	/////////////////////////// NAVIGATION ////////////////////////////////

	switchToPCView(){
		this.setState({
			switchView: 'PC'
		})
	}

	switchToTextEditorView(){
		// in future will check if pseudo has been saved before 
		// will allow you to choose view
		// for now, takes you to code block
		this.setState({
			switchView: 'TE'
		})
	}

	////////////////////////////// CRUD ///////////////////////////////////

	addPseudo(pseudo){
			// let pseudo = event.target.value;
			// let key = event.key;
			// if (key === 'Enter'){
				this.setState(state => { 
					let pseudos = state.pseudos.concat(pseudo) 
					return { pseudos };
				});	
				
				// event.target.value = '';
			// }
		}
		
		editPseudo(index, text){
			this.setState(state => {
				state.pseudos.splice(index, 1, text);
				return state.pseudos;
			})
		}

    removePseudo(index){
			this.setState(state => {
				let pseudos = state.pseudos.filter((saved, i) => {
					return i !== index;
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

	render(){

		//////////////// OPTIONS ///////////////////

		options.mode = this.state.mode;
		options.theme = this.state.theme;


		let switchView = this.state.switchView;
		let currentView;


		if (switchView === 'PC') {

				// currentView = <PseudoContext.Provider
				// 				value={this.state}
				// 				>
				// 					<PCInputContainer />
				// 			  </PseudoContext.Provider>
			//PCInputContext
			currentView = <PCInputContainer
											pseudos={this.state.pseudos}
											editPseudo={this.editPseudo}
											addPseudo={this.addPseudo}
											removePseudo={this.removePseudo} 
											switchToTextEditorView={this.switchToTextEditorView}
			      	  		/>
		} else if (switchView === 'TE') {

				// currentView = <EditorContext.Provider
				// 				value={this.state}
				// 				>
				// 				<TextEditingContainer />
				// 			  </EditorContext.Provider>

			//CodeEditingContext
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
			<React.Fragment>

				{currentView}
			</React.Fragment>
		)

		
	}

}

export default SwitchContainer;