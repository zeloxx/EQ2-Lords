import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import LoadingOverlay from '../components/LoadingOverlay';
import { parseObjectToQueryString, capitalize } from '../util/helper-functions';

export default function HomePage(props) {
	const [ values, setValues ] = useState({ name: '', server: '' });

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSearch = () => {
		debugger;
		props.history.push(
			`search-results?${parseObjectToQueryString({
				'name.first': capitalize(values.name),
				server: values.server
			})}`
		);
	};

	return (
		<div className="App">
			<input onChange={handleInputChange} name="name" type="text" placeholder="Character Name" />
			<input onChange={handleInputChange} name="server" type="text" placeholder="Server Name" />
			<Button
				className="btn btn-primary"
				icon="fa fa-search"
				btnText="Search"
				handleClick={handleSearch.bind(this)}
			/>
			<LoadingOverlay />
		</div>
	);
}
