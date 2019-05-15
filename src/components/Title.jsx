import React, { Component } from 'react';

function Title(props){
	return (
		<div>
			Pseudo!
			<button onClick={props.switchToPCView}>To PC View</button>

		</div>
		)
}

export default Title;
