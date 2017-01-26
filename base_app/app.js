import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
	render () {
		return (
			<h1> Welcome {this.props.name}! Your are awesome!!</h1>
				);
	
	}
}

const element = document.getElementById('root');
ReactDOM.render (<Welcome name={"buddy"}/>, element);
