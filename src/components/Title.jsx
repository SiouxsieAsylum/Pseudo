import React, { Component } from 'react';

function Title(props){
	return (
		<div className="title centered-container">
			<h4 className="title-heading">Welcome to Pseudo!</h4>
			{/*could be succeeded with a what-is page */}
			<button className="view-switch-button title-button" onClick={props.switchToSwitchView}>Enter</button>
		</div>
		)
}

export default Title;
