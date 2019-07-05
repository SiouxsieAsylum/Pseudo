import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { thisExpression } from '@babel/types';

// regex necessary content here instead at the loop
function Child(){
	return (
		<div className="single-input-container">
			<form method="POST">	
				<FontAwesomeIcon icon={faMinusCircle} onClick={() => this.props.removePseudo(this.props.pseudoIndex, this.props.axID)} />
				
				<input placeholder="Child" name="comment"

				/>
			</form>
		</div>
	)
}

export default Child;
