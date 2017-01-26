import React from 'react';
import ReactDOM from 'react-dom';

function NumberItem (props) {
	if (!props.onlyEven || props.number % 2 === 0)
		return (	
			<li> {props.number} </li>
		);
	else {return null}
}


class NumberList extends React.Component {
	render () {
		return (
				<ul className="number-list">
					{this.props.numbers.map ((number) =>
							<NumberItem key={number.toString()} number={number} />
							)}
				</ul>

				);
	}
}

class EvenNumberList extends React.Component {
	render () {
		var numbers = this.props.numbers;

		const listItems = numbers.map ((number) =>
							<NumberItem key={number.toString()} number={number} onlyEven={true}/>
				);	

		return (
				<ul>
					{listItems}
				</ul>	
				);
	}

}

const element = document.getElementById('root');
ReactDOM.render (<EvenNumberList numbers={[1, 2, 3, 4, 5, 6, 7]}/>, element);
