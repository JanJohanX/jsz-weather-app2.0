<template>
	<div id="jsz-w-dashboard">
		<div class="jsz-row jsz-flex-center">
			<div class="jsz-w-head jsz-row jsz-flex-center">
				<i class="fas fa-map-marker-alt"></i>
				<h1>{{weatherData.name}}, {{weatherData.sys.country}}</h1>
			</div>
			<div class="jsz-today">{{getToday()}}</div>
		</div>

		<div class="jsz-grid-3-small">
			<div class="jsz-col jsz-w-temp-container">
				<div class="jsz-w-temp">
					Temperature: <b>{{Math.round(weatherData.main.temp)}} °C </b>
				</div>
				<div class="jsz-row jsz-w-temp-sub">
					<p>Min. {{Math.round(weatherData.main.temp_min)}} °C</p>
					<p>Max. {{Math.round(weatherData.main.temp_max)}} °C</p>
				</div>
				<p>Temp feel: {{Math.round(weatherData.main.feels_like)}} °C</p>
			</div>

			<div class="jsz-row jsz-w-weather-container">
				<div class="jsz-col">
					<h2>{{weatherData.weather[0].main}}</h2>
					<p>{{weatherData.weather[0].description}}</p>
					<p>Wind speed: <b>{{weatherData.wind.speed}} m/s </b> <i class="fas fa-wind"></i> </p>
				</div>
				<div id="weatherIcon">
					<img v-bind:src="weatherIcon" />
				</div>
			</div>

			<div class="jsz-w-humidity-container jsz-row jsz-flex-center">
				<h3>Humidity</h3>
				<div id="jsz-w-humidity-wrap">
					<p id="jsz-w-humidity-precent"></p>
					<svg height="85" width="85">
						<circle class="jsz-w-humidity-underlay" cx="50%" cy="50%" r="36"></circle>
						<circle class="jsz-w-humidity-progress" cx="50%" cy="50%" r="36"></circle>
					</svg>
				</div>
			</div>
		</div>
		
		<br>
		pressure: {{weatherData.main.pressure}} hPa
		<br>
		sunrise: {{getDate(weatherData.sys.sunrise)}}
		<br>
		sunset: {{getDate(weatherData.sys.sunset)}}
		
	</div>
</template>

<script>

export default {
	name: 'WeatherDashboard',
	data() {
		return {
			weatherIcon: ''
		}
	},
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
		},
		getToday() {
			let today = new Date();
			let dd = String(today.getDate()).padStart(2, '0');
			let mm = String(today.getMonth() + 1).padStart(2, '0');
			let yyyy = today.getFullYear();
			today = dd + '.' + mm + '.' + yyyy;
			return today;
		},
		getWeatherIcon() {
			// console.log(this.weatherData.weather[0].main);
			let weatherIcon = '';
			switch (this.weatherData.weather[0].main) {
				case 'Rain':
					weatherIcon = 'Rain';
					break;
				case 'Clouds':
					weatherIcon = 'Clouds';
					break;
				case 'Clear':
					weatherIcon = 'Clear';
					break;
				case 'Mist':
					weatherIcon = 'Mist';
					break;
			}

			this.weatherIcon = `weatherIcon/${weatherIcon}.svg`;
		},
		humidityFill() {
			var progress = document.querySelector('.jsz-w-humidity-progress');
			var pathLength = progress.getAttribute('r') * 2 * Math.PI;
			progress.style.strokeDasharray = pathLength + 'px';
			// progress.style.strokeDashoffset = pathLength + 'px';
			var pos = 213;
			var humidity = 0;

			var id = setInterval(() => {
				if (pos == (Math.round(pathLength - (pathLength * (this.weatherData.main.humidity / 100))))) {
					clearInterval(id);
				} else {
					pos--;
					progress.style.strokeDashoffset = pos;

					humidity = -Math.round(((pos - pathLength) / pathLength) * 100);
					document.getElementById('jsz-w-humidity-precent').innerHTML = humidity + ' %';
				}
			}, 8);

		}
	},
	mounted() {
		this.getWeatherIcon();
		this.humidityFill();
	},
}
</script>