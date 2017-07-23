const request = require('request');

var getWeather = (lat, lng, callback) => {
	request({
		url: `https://api.darksky.net/forecast/36ee9995b64620a343066d1d16bdc2de/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		// console.log(JSON.stringify(response, null, 3));
		if(error) {
			callback(error);
		}
		else if(response.statusCode == '200') {
			callback(null, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		} else {
			callback('Unable to fetch weather.');
		}
	});
};

module.exports = {
	getWeather
};