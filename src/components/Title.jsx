import React, { Component, useState } from 'react';

function Title(props){
	let [enteredQuestion, changeValue] = useState('');
	const clickFunction = () => {
		props.setQuestion(enteredQuestion)
		props.switchToSwitchView();
	}
	return (
		<div className="title centered-container">
			<h1 className="title-heading large-heading">Welcome to Pseudo!</h1>
			<h2 className="title-heading small-heading">Please enter a one-line description of the question you're attempting to solve</h2>
			<div className="single-input-container question-input">
				<input 
					className=""
					onKeyUp={(e) => changeValue(enteredQuestion = e.target.value)}
				/>
			</div>
			<button className="view-switch-button title-button" onClick={clickFunction}>Enter</button>
		</div>
		)
}

export default Title;
