import React from 'react';
import ReactDOM from 'react-dom';
import data from './data'

function ItemRow (props) {
	return (
		<tr>
			<td key={1}>{props.name}</td>
			<td key={2}>{props.price}</td>
		</tr>	
	);
	
}

function CategoryHeaderRow (props) {
	return (
		<tr>
			<th>{props.category}</th>
		</tr>	
	);
	
}

function TableTitleHeader (props) {
	return (
		<thead>	
		<tr>
			{props.titles.map((title, index) => <th key = {index}>{title}</th>)}
		</tr>
		</thead>
	);
}


class Table extends React.Component {
	render () {
		// Assume its an arrray
		var data = this.props.data;
		//console.log ('rendering table');

		// Store them in a hash
		var categorizedData = {};
		data.forEach ((item) => {
				if (categorizedData[item.category] == undefined) {
					categorizedData[item.category]= new Array();
				}
				
				categorizedData[item.category].push(item);
				});
		var titles = ["Name", "Price"];

		var rows = [];
		let index = 2;
		for (var category in categorizedData) {
				if (categorizedData.hasOwnProperty(category)) {
					//console.log(category);
					rows.push (<CategoryHeaderRow key={index} category={category} />);
				}
				index++;

				var itemsAdded = false;
				categorizedData[category].forEach ((item) => {

						// stocked may not be necessary to be passed
						if ((!this.props.showOnlyStocked  ||  item.stocked == true) && (!this.props.searchText || !item.name.search(new RegExp(this.props.searchText,"i")))) {
							rows.push(<ItemRow key={index} name={item.name} price={item.price} isStocked={item.stocked} />)
							itemsAdded = true;
							index++;
						}
						
						});

				if (!itemsAdded) {
					// remove last item
					rows.pop ();
				}

		}

		return (
			<table>
				<TableTitleHeader key={1} titles={titles} />
				<tbody>
					{rows}		
				</tbody>
				
			</table>
		);
	
	}
}


class FilteredTable extends React.Component {
	constructor (props) {
		super(props);

		this.state = {searchText: "", showOnlyStocked: false};
	}
	
	handleSearchTextChanged (event) {
		this.setState({searchText: event.target.value})
	}
	
	handleCheckBoxChanged (event) {
		this.setState({showOnlyStocked: event.target.checked})
	}


	render () {
		const paddingStyle = {paddingLeft: 12};
		
		return (
			<div style={paddingStyle}>
				<form>
					<input type="text" placeholder="Search text " value={this.state.searchText} onChange={this.handleSearchTextChanged.bind(this)} />
					<p>
						<input type="checkbox" checked={this.state.showOnlyStocked} onChange={this.handleCheckBoxChanged.bind(this)} />
						<span> Show only stocked items </span>
					</p>
				</form>
				<Table data={data} searchText={this.state.searchText} showOnlyStocked={this.state.showOnlyStocked} />			
			</div>
		);
	}
}

const element = document.getElementById('root');
ReactDOM.render (<FilteredTable data={data}/>, element);
