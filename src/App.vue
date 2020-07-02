<template>
	<div id="app">
		<Search />
		<ErrorNotif v-if="this.$store.state.notif.err"/>
		<LoadingData v-if="this.$store.state.loadingData"/>
		<WeatherDashboard v-if="this.$store.state.weatherData && !this.$store.state.loadingData"/>
	</div>
</template>

<script>
import Search from './components/Search.vue';
import LoadingData from './components/LoadingData.vue';
import ErrorNotif from './components/ErrorNotif.vue';
import WeatherDashboard from './components/WeatherDashboard.vue';

export default {
	name: 'App',
	components: {
		Search,
		LoadingData,
		ErrorNotif,
		WeatherDashboard
	}
}
</script>
