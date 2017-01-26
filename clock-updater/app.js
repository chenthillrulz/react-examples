import React from 'react';
import ReactDOM from 'react-dom';

function FormattedDate (props) {
	
	var onClick = function handleClick (e) {
		e.preventDefault();
		console.log ("link clicked  and prop val is  " + props.date);
	};
	
	
	return (<span> {props.date.toLocaleString()} 
			
			<a href="#" onClick={onClick}> print date to console </a>
			
			</span>);
}


class Welcome extends React.Component {
	constructor (props) {
		super(props);

		this.state = {time: new Date()}
		this.timerId = undefined;
	}

	tick () {
		this.setState ({time: new Date()});
	}

	componentDidMount () {
		console.log("component mounted ");
		this.timerId = setInterval(this.tick.bind(this), 1000);
	}

	componentWillUnmount () {
		console.log("component unmounted ");
		if (this.timerId)
			clearInterval(this.timerId);
	}


	render () {
		return (
			<div>	
				<h1> Welcome {this.props.name}!! Your are awesome!!</h1>
				<h2>Time is <FormattedDate date={this.state.time} /> </h2>
			</div>
			);
	
	}
}

const element = document.getElementById('root');
ReactDOM.render (<Welcome name={"buddy"}/>, element);
