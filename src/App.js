import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';
import SearchResults from './pages/SearchResults';

export default function App() {
	return (
		<HashRouter>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/character-page" component={CharacterPage} />
				<Route path="/search-results" component={SearchResults} />
			</Switch>
		</HashRouter>
	);
}
