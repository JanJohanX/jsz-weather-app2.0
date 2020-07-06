<template>
	<div class="jsz-search-container">
		<input class="jsz-search-input" type="text" v-model="bySearch" @keypress="getBySearch" autocomplete="off" placeholder="Search for city">
		<button class="jsz-sec-btn jsz-clear-btn" @click="clearData" v-if="this.$store.state.weatherData || this.$store.state.loadingData"><i class="fas fa-times"></i></button>

		<button class="jsz-prim-btn jsz-search-btn" @click="getBySearch">Search</button>
		<button class="jsz-prim-btn jsz-place-btn" @click="getByLocation">Place <i class="fas fa-map-marker-alt"></i></button>
	</div>
</template>

<script>
export default {
	name: 'Search',
	data() {
		return {
			apiKey: 'd2a9887d08726ec158f84a1205d0b8f3',
			urlBase: 'https://api.openweathermap.org/data/2.5/',
			bySearch: '',
		}
	},
	methods: {
		getBySearch() {
			if (event.key === 'Enter' || event.type === 'click') {
				this.$store.dispatch('showLoading');
				this.$store.dispatch('clearData');
				this.$store.dispatch('hideNotif', 'err');

				const url = `${this.urlBase}weather?q=${this.bySearch}&&units=metric&appid=${this.apiKey}`;
				this.$http.get(url)
					.then(this.searchResult, this.loading = false)
					.catch(this.catchedErr);
			}
		},
		getByLocation() {
			if (navigator.geolocation) {
				this.bySearch = '';
				this.$store.dispatch('showLoading');
				this.$store.dispatch('hideNotif', 'err');

				navigator.geolocation.getCurrentPosition(position => {
					let lat = position.coords.latitude;
					let long = position.coords.longitude;
					const url = `${this.urlBase}weather?lat=${lat}&lon=${long}&units=metric&appid=${this.apiKey}`;
					
					this.$http.get(url)
						.then(this.searchResult)
						.catch(this.catchedErr);
				})
			}
		},
		searchResult(result) {
			if (result.status === 200) {
				this.$store.dispatch('getBySearch', result);
				this.$store.dispatch('hideLoading');
			}
		},
		catchedErr(err) {
			if (err.response.status === 400 || err.response.status === 404) {
				this.$store.dispatch('hideLoading');
				this.$store.dispatch('showNotif', 'err');
			}
		},
		clearData() {
			this.bySearch = ''
			this.$store.dispatch('clearData');
		}
	}
}
</script>