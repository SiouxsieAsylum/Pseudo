import React, { Component } from 'react';
import Scroll from 'react-scroll';
import PCInput from './PCInputTest';


const Link = Scroll.Link;
const DirectLink = Scroll.DirectLink;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;


class PCInputContainer extends Component {
	constructor(props){
		super(props);
		this.state = {}

		this.scrollToBottom = this.scrollToBottom.bind(this);
	}

	scrollToBottom() {
		scroll.scrollToBottom({
			containerId: 'pc-inputs'
		})
	}

	componentWillUpdate(){
		this.scrollToBottom();
	}

	render() {
		return (
			<div className="pc-input-container centered-container content-container" id="pc-inputs">
				{this.props.pseudos.map((comment, i) => {
					console.log('comment',comment, this.props.pseudos.length);
					let regex = /\s/gi;
					let uniqueName = comment.title.replace(regex, '-');
					return <PCInput 
						axID={comment.id}
						key={'PC-Input-' + uniqueName}
						pseudo={comment.title}
						pseudoIndex={i}
						editPseudo={this.props.editPseudo}
						addPseudo={this.props.addPseudo}
						removePseudo={this.props.removePseudo}
					/>
				})}

				<PCInput 
					id="newInput"
					addPseudo={this.props.addPseudo}
					removePseudo={this.props.removePseudo}
					lastPseudo={this.props.lastPseudo}
				/>

				<button className="view-switch-button" onClick={this.props.switchToTextEditorView}>To TE View</button>
			</div>
		)
	}
}

export default PCInputContainer;

