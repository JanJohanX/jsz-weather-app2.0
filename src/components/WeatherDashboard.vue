<template>
	<div>
		<h1>data</h1>
		<!-- <h1></h1> -->
		city: {{weatherData.name}}
		<br>
		temp: {{Math.round(weatherData.main.temp)}} °C
		<br>
		temp feel: {{Math.round(weatherData.main.feels_like)}} °C
		<br>
		min temp: {{Math.round(weatherData.main.temp_min)}} °C
		<br>
		max temp: {{Math.round(weatherData.main.temp_max)}} °C
		<br>
		weather: {{weatherData.weather[0].main}}
		<br>
		description: {{weatherData.weather[0].description}}
		<br>
		humidity: {{weatherData.main.humidity}} %
		<br>
		pressure: {{weatherData.main.pressure}} hPa
		<br>
		wind speed: {{weatherData.wind.speed}} m/s
		<br>
		sunrise: {{getDate(weatherData.sys.sunrise)}}
		<br>
		sunset: {{getDate(weatherData.sys.sunset)}}
		
		<!-- {{weatherData}} -->
	</div>
</template>

<script>

export default {
	name: 'WeatherDashboard',
	computed: {
		weatherData() {
			return this.$store.state.weatherData;
		}
	},
	methods: {
		getDate(timestamp) {
			let date = new Date(timestamp * 1000);
			let hours = date.getHours();
			let minutes = date.getMinutes();
			let sec = date.getSeconds();
			let formatDate = `${hours} : ${minutes} : ${sec}`;
			return formatDate;
		}
	}
}
</script>