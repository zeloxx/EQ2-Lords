import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function CharacterPage() {
	const [ character, setCharacter ] = useState({});

	useEffect(() => {
		Axios({
			url: 'http://census.daybreakgames.com/json/get/eq2/character/?name.first=Zachy&locationdata.world=Kaladim',
			method: 'GET'
		}).then((res) => setCharacter(res.data.character_list[0]));
	}, []);

	return <div />;
}
