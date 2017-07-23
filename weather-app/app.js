const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
		.options({
			a: {
				demand: true,
				alias: 'address',
				describe: 'Address to fetch weather for',
				string: true
			}
		})
		.help()
		.alias('help', 'h')
		.argv;

geocode.geocodeAddress(argv.address, (error, result) => {
	if(error) {
		console.log(error);
	} else {

		console.log(`Address : ${result.address}`);
		// console.log(`Latitude : ${result.latitude}`);
		// console.log(`Longitude : ${result.longitude}`);

		weather.getWeather(result.latitude, result.longitude, (errorWeather, resultWeather) => {
			if(errorWeather) {
				console.log(errorWeather);
			} else {
				console.log(`It's currently ${resultWeather.temperature}. It feels like ${resultWeather.apparentTemperature}`);
			}
		});

		// console.log(JSON.stringify(result, undefined, 3));
		
		
	}
});