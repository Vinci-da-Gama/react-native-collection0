const kToC = (kelvin) => {
	return Math.round(kelvin - 273.15) + 'ºC';
};

export const getTodayWeatherNByLatLng = (lat, lng) => {
	// http://api.openweathermap.org/data/2.5/weather?APPID=1d0e444db751838c9951032e7c5ed386&lat=-33.874755&lon=151.200889
	const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?';
	const url = `${rootUrl}APPID=1d0e444db751838c9951032e7c5ed386&lat=${lat}&lon=${lng}`;

	return fetch(url, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}/* ,
		body: JSON.stringify({
			firstParam: 'yourValue',
			secondParam: 'yourOtherValue',
		}) */
	})
	.then((res) => {
		return res.json();
	})
	.then((jsonRz) => {
		console.log('25 -- ', jsonRz);
		return {
			city: jsonRz.name,
			temperature: kToC(jsonRz.main.temp),
			description: jsonRz.weather[0].description
		};
	})
	.catch(((err) => {
		console.log('33 -- ', err);
	}));
};
