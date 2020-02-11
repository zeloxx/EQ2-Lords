export const parseQueryStringToObject = (url) => {
	const queryStartIndex = url.indexOf('?');
	let queryStr = '';
	if (queryStartIndex > -1) {
		for (let i = queryStartIndex; i < url.length; i++) {
			queryStr += url[i];
			if (url[i + 1] === '#' || url[i + 1] === '/' || url[i + 1] === '') {
				break;
			}
		}
		return JSON.parse(
			'{"' +
				decodeURIComponent(queryStr.slice(1)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
				'"}'
		);
	} else {
		return {};
	}
};

export const parseObjectToQueryString = (obj) => {
	return Object.keys(obj).map((key) => key + '=' + obj[key]).join('&');
};

export const capitalize = (s) => {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
};
