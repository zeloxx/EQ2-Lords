import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { parseQueryStringToObject, parseObjectToQueryString } from '../util/helper-functions';

export default function SearchResults() {
	const [ results, setResults ] = useState({});

	useEffect(() => {
		debugger;
		Axios({
			url: `http://census.daybreakgames.com/s:eq2calculator/json/get/eq2/character/`,
			method: 'GET',
			params: parseQueryStringToObject(window.location.href)
		})
			.then((res) => {
				debugger;
				setResults(res.data.character_list);
			})
			.catch((err) => {
				debugger;
			});
	}, []);

	debugger;

	return <div />;
}
