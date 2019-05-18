import React, { Component } from 'react';
import Scroll from 'react-scroll';
import CodeEditorBlock from './CodeEditorBlock';

const Link = Scroll.Link;
const DirectLink = Scroll.DirectLink;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

class CodeBlockContainer extends Component {
	constructor(props){
		//ensures props are defined at componentDidMount
		super(props);
		//initializes state
		this.state = {}
		//bind event handlers to this instance
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
			<div>

				{this.props.pseudos.map((comment, i) => {
					return <CodeEditorBlock 
						key={i}
						pseudo={comment}
						formatComment={this.props.formatComment}
						/>
				})}
      		</div>
		)
	}
}

export default CodeBlockContainer;